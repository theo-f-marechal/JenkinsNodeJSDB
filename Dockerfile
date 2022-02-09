FROM node:14
WORKDIR /app
RUN npm install express
RUN npm install express-session
COPY * ./
EXPOSE 8081
CMD ["npm", "start"]