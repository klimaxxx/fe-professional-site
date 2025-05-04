# Stage 1: Build stage
FROM node:20-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production && npm cache clean --force
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM nginx:alpine

# Cria usuário e grupo não-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Cria e ajusta permissões de diretórios necessários
RUN mkdir -p /var/cache/nginx /var/run /run && \
    chown -R appuser:appgroup /var/cache/nginx /var/run /run /usr/share/nginx/html

# Copia arquivos da build
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Muda para usuário seguro
USER appuser

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --fail http://localhost || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
