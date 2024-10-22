# Stage 1: Build the React app
FROM node:18 as build
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
