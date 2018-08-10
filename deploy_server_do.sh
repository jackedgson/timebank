#! /bin/bash
yarn build:server
heroku container:push --app=calm-citadel-25445 web
heroku container:release --app=calm-citadel-25445 web
# docker build -t benawad/tb:latest .
# docker push benawad/tb:latest
# ssh root@167.99.11.233 "docker pull benawad/tb:latest && docker tag benawad/tb:latest dokku/tb:latest && dokku tags:deploy tb latest"