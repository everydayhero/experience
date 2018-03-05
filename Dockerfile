FROM node:8
MAINTAINER Ghost Developer <edh-dev@everydayhero.com.au>

RUN npm install -g lerna@2.9.0

ENV HOME /srv/app
RUN mkdir $HOME
WORKDIR $HOME

ADD . $HOME/

RUN NODE_ENV=production lerna bootstrap --hoist
