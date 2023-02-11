FROM node:16

WORKDIR /app
COPY . .
RUN yarn 
CMD ["yarn", "start"]
EXPOSE 4000