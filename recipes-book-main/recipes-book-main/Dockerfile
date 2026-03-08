FROM node:18
WORKDIR /recipes-app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD ["node", "index.js"]