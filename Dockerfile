FROM node:18-alpine AS deps
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN yarn build

FROM node:18-alpine AS runner
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]