#Official Node.js runtime as a parent image
FROM node:22.3

#Set the working directory
WORKDIR /usr/src/app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install

#Expose the port the app runs on
EXPOSE 3001

#Start the app
CMD ["node", "server.js"]