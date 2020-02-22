# Specify a base image
FROM node:alpine

# set working directory in container
WORKDIR /usr/app

# copy package.json << separate COPY to let docker remember the cache
COPY ./package.json ./

# Install some dependencies
RUN npm install

# copy local file into container
COPY ./ ./

# Default command
CMD ["npm", "start"]