#!/bin/bash

sudo certbot renew
cd /home/my-portfolio
docker exec -it react-portfolio  -s reload