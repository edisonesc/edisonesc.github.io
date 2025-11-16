# Stage 1: build Angular app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2: serve Angular with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/portfolio-v2 /usr/share/nginx/html

# Optional: custom Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
