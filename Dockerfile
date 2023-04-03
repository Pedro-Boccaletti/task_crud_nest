FROM node:16.14-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma

RUN yarn

ENV PORT 8080

COPY . .

RUN yarn prisma generate
RUN yarn build

FROM node:16.14-alpine

COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

CMD [ "/bin/sh", "./entrypoint.sh" ]
