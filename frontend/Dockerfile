#Node.js official runtime as parent image
FROM node:22.3

#Set the working directory
WORKDIR /usr/src/app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install

#Expose the port the app runs on
EXPOSE 3000

#Serve the app
CMD ["npm", "start"]
