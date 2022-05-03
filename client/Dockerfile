FROM node:lts-slim
COPY . /webserver
WORKDIR /webserver
# RUN npm install -g yarn && yarn install
RUN yarn install
RUN yarn run build

CMD yarn serve -s build