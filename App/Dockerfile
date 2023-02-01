# Pull the base image
FROM node:alpine as builder
# Set the working directory
WORKDIR /app
# Copy files to /app
COPY . /app
# Install dependencies
RUN yarn install
RUN rm -rf src
# Run application
ENTRYPOINT [ "yarn", "start" ]

