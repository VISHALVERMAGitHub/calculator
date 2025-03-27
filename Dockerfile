# Base image use kar rahe hain
FROM nginx:alpine

# Work directory set kar rahe hain
WORKDIR /usr/share/nginx/html
# Default files delete
RUN rm -rf /usr/share/nginx/html/*

# Custom files copy 
COPY . /usr/share/nginx/html

# Nginx configuration replace 
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
# Port expose kar rahe hain
EXPOSE 80

# Nginx server start hoga (default command se)
CMD ["nginx", "-g", "daemon off;"]
