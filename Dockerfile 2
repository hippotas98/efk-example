# FROM mongo
# WORKDIR /var/expressCart
# EXPOSE 27017
# CMD ['mongod', '--smallfiles', '--logpath=/dev/null']

# FROM mhart/alpine-node:8

# ENV NODE_VERSION 8.9.4

# RUN apk add --no-cache make gcc g++ python bash

FROM node

WORKDIR /var/expressCart
COPY package.json /var/expressCart/
RUN npm install

COPY . /var/expressCart/
# COPY lib/ /var/expressCart/lib/
# COPY bin/ /var/expressCart/bin/
# COPY config/ /var/expressCart/config/
# COPY public/ /var/expressCart/public/
# COPY routes/ /var/expressCart/routes/
# COPY test/ /var/expressCart/test/
# COPY views/ /var/expressCart/views/

# COPY app.js /var/expressCart/
# COPY gulpfile.js /var/expressCart/
EXPOSE 8081
CMD ["npm", "start"]


