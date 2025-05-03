# Stage 1: Build stage
FROM node:20-alpine as build

WORKDIR /usr/src/app

# Copiar os arquivos necessários para instalar dependências
COPY package*.json ./

# Instalar dependências de produção
RUN npm install --production && npm cache clean --force

# Copiar o código-fonte
COPY . .

# Rodar o build (se necessário)
RUN npm run build

# Stage 2: Production stage
FROM nginx:alpine

# Copiar apenas os arquivos estáticos para o contêiner final
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --fail http://localhost || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
