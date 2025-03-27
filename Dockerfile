# Base image use kar rahe hain
FROM nginx:alpine

# Work directory set kar rahe hain
WORKDIR /usr/share/nginx/html

# Apne local project ke files ko container me copy kar rahe hain
COPY . /usr/share/nginx/html

# Port expose kar rahe hain
EXPOSE 80

# Nginx server start hoga (default command se)
