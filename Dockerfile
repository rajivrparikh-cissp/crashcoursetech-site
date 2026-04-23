# Use the official Nginx Alpine image
FROM nginx:alpine

# Copy static assets into the Nginx default html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
