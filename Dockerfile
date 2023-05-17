FROM node:alpine AS builder

WORKDIR "/"

COPY package*.json ./

# Copying local files to app folder
COPY . .
# Installing dependencies
RUN npm install --silent \
 && chown -R $(id -u):$(id -g) node_modules




EXPOSE 3000

CMD ["node", "index.js"]