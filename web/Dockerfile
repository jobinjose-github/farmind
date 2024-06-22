# Stage 1: Build the Angular application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular application for production
RUN ng build --configuration=production

# Stage 2: Serve the Application with Nginx
FROM nginx:alpine

# Copy the built app to nginx html directory
COPY --from=builder /app/dist/web/browser /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
