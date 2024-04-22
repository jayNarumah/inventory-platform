FROM node:18.12.1
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm run build
EXPOSE 4200
CMD [ "sh", "-c", "nx run client-portal:serve && nx run api:serve" ]
# CMD [ "npm", "nx", "run", "client-portal:serve" ]
