FROM node:lts-slim
COPY . /webserver
WORKDIR /webserver
RUN yarn install
# RUN yarn run build

# CMD yarn serve -s build # currently not working with ".env" for whatever reason
CMD yarn start