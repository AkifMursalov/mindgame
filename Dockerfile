# Create an image for runnig this project
FROM node:16.14.2-alpine3.14

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

RUN npx prisma generate

CMD [ "node", "dist/main" ]

