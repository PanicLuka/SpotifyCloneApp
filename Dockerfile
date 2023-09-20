FROM node:18-alpine
WORKDIR /spotify-clone-app

COPY public/ /spotify-clone-app/public
COPY src/ /spotify-clone-app/src
COPY package.json /spotify-clone-app/

RUN npm install 

CMD ["npm", "start"]
