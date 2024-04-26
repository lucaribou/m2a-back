# Dockerfile
FROM docker.io/node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM docker.io/nginx:1.25.5-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html