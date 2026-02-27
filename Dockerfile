FROM node:22-alpine AS builder
WORKDIR /project

COPY . .

WORKDIR /project/ui
RUN npm ci
RUN npm run build

FROM node:22-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /project/ui/.next/standalone ./
COPY --from=builder /project/ui/.next/static ./.next/static
COPY --from=builder /project/ui/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
