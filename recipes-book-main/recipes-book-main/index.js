'use strict';
require("./utils/tracing");
const path = require('path');
const http = require('http');
const express = require('express');
const logger = require('./utils/logger');
const imitateServerFailure = require('./utils/imitateServerFailure')
const { trace } = require('@opentelemetry/api');

const oas3Tools = require('oas3-tools');
const serverPort = 8080;
const app = express();

const client = require('prom-client');

const register = new client.Registry();

client.collectDefaultMetrics({
    app: 'recipes-app',
    prefix: 'node_',
    timeout: 10000,
    gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
    register
});

const totalRequests = new client.Counter({
    name: 'api_requests_total',
    help: 'Total number of API requests',
    labelNames: ['method', 'endpoint', 'status'],
});

register.registerMetric(totalRequests)

app.use((req, res, next) => {

    const tracer = trace.getTracer('recipes-app');
    const span = tracer.startSpan('http.request.get', {
        attributes: {
            'http.method': req.method,
            'http.url': req.originalUrl,
            'http.user_agent': req.get('User-Agent'),
        },
    });
    logger.info(`Received request for ${req.path} with method ${req.method}`);
    if (req.path !== "/metrics" && !req.path.includes("docs")) {
        try {
            imitateServerFailure();
            span.setAttributes({'http.status_code': 200})
        } catch(err) {
            logger.error(err.message);
            span.setAttributes({'http.status_code': 500})
            res.status(500).send('Internal Server Error');
        }
    }
    res.on('finish', () => {
        if (req.path !== "/metrics") {
            totalRequests.inc({ method: req.method, endpoint: req.path, status: res.statusCode });
        }
    });
    span.end()
    next();
});

app.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type', register.contentType);
    res.send(await register.metrics());
});


// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const swaggerApp = expressAppConfig.getApp();

app.use(swaggerApp);

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    logger.info('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    logger.info('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});