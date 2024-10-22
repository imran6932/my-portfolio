#!/bin/bash

sudo certbot renew
docker exec -it react-app  -s reload