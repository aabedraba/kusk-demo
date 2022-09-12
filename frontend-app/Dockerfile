FROM node:16-alpine
COPY . .
RUN npm ci
RUN npm run build
CMD npm run start