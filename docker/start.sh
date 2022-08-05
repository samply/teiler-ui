#!/usr/bin/env bash

envsubst  < ./config/env.template.js > ./config/env.js

echo 'Start NGINX in foreground (non-daemon-mode)'
exec nginx -g 'daemon off;'
