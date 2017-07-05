FROM node:6
MAINTAINER Ghost Developer <edh-dev@everydayhero.com.au>

RUN npm install -g lerna@2.0.0-rc.5

ENV HOME /srv/app
RUN mkdir $HOME
WORKDIR $HOME

ADD . $HOME/

RUN NODE_ENV=production lerna bootstrap --hoist
