FROM node:6
MAINTAINER Ghost Developer <edh-dev@everydayhero.com.au>

RUN npm install -g yarn@0.20.3 lerna@2.0.0-beta.37

ENV HOME /srv/app
RUN mkdir $HOME
WORKDIR $HOME

ADD Dockerfile.ADD.npm-install.tar $HOME/
RUN NODE_ENV=production lerna bootstrap

ADD . $HOME/
