FROM node:14.15.4
ENV NODE_ENV development

# Set app directory
WORKDIR /app

# Install app dependencies
COPY . .
RUN npm config set unsafe-perm true
RUN npm install
# No src files are added to container here.
# Dockerfile.dev is to be used with volume mounting from host via docker-compose or:
# docker run -v ./apps:/app/apps:ro -v ./libs:/app/libs:ro

EXPOSE 3333
CMD npm start listpeople-be 