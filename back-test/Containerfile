FROM node:18 As build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npm i --only=production && npm cache clean --force

USER node 


ENV NODE_ENV production
FROM node:18-alpine As production
WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist

CMD [ "node", "dist/main.js" ]
