#!/bin/bash

sudo certbot renew
cd /home/my-portfolio
docker exec -it react-portfolio nginx  -s reload
echo "docker container reloaded"