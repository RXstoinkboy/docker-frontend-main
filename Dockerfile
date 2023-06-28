FROM node:18.12.1

# Create directory in container image for app code
RUN mkdir -p /usr/src/client

# Copy app code (.) to /usr/src/app in container image
COPY . /usr/src/client

# Set working directory context
WORKDIR /usr/src/client

RUN npm install

# start app
CMD ["npm", "run", "dev"]