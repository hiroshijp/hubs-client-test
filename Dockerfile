FROM ghcr.io/puppeteer/puppeteer:latest
WORKDIR /app
COPY ./package.json /app
RUN npm install
