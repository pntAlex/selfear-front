FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

ENV NODE_ENV=development
ENV NUXT_TELEMETRY_DISABLED=1
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV PORT=3000

EXPOSE 3000

CMD ["bun", "run", "dev", "--host", "0.0.0.0", "--port", "3000"]
