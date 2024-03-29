FROM node:16.14-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma

RUN yarn

COPY . .

RUN yarn build
RUN yarn prisma generate

FROM node:16.14-alpine

COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 8080

CMD [ "/bin/sh", "./entrypoint.sh" ]
