FROM mongo
WORKDIR /app
RUN mkdir ./data
CMD ['mongod', '--dbpath ./data']

FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3100
CMD [ "npm", "start" ]