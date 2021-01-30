FROM nginx:1.17.1-alpine

# Create app directory
WORKDIR /usr/src
COPY /dist/cashback-front-end /usr/share/nginx/html