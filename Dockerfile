# Use the official Nginx Alpine image
FROM nginx:alpine

# Copy static assets into the Nginx default html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx, replacing the port in the default config to match Cloud Run's PORT env var
CMD sed -i -e 's/listen.*/listen '"${PORT:-8080}"';/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
