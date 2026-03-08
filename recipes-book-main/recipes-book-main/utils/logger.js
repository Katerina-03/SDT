const winston = require("winston");
const LokiTransport = require("winston-loki");

const logger = winston.createLogger({
    transports: [
      new LokiTransport({
        host: 'http://loki:3100', 
        json: true,
        labels: { job: 'recipes-app' },
        replaceTimestamp: true,
        format: winston.format.printf(({ level, message }) => {
            const time = new Date().toLocaleTimeString();
            return `${time} ${level.toUpperCase()} ${message}`;
        })
      })
    ]
  });
  
  module.exports = logger;