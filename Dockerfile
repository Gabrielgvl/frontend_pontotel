FROM node:12.16-alpine

COPY . .

RUN yarn global add serve
RUN yarn
RUN yarn build

EXPOSE 3000

CMD serve -s build -l 3000
