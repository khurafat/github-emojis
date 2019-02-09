FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json', 'package-lock.json' (if available) and 'yarn.lock' (if available)
COPY package*.json ./
COPY yarn.lock ./

# install project dependencies
RUN yarn global add @vue/cli
# RUN yarn global add @vue/cli-service-global
# RUN yarn global add @vue/cli-service
RUN yarn install
# RUN node --version
# RUN yarn --version
# RUN echo 'export PATH="$(yarn global bin):$PATH"' > ~/.bashrc
# RUN source ~/.bashrc

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN yarn run build --dest docs

EXPOSE 8080
CMD [ "dist" ]
