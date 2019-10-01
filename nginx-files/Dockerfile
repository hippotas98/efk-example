FROM mongo
WORKDIR /app
RUN mkdir ./data
CMD ['mongod', '--dbpath ./data']

FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm audit fix
COPY . /app
EXPOSE 8081
CMD [ "npm", "start" ]