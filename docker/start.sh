#!/usr/bin/env bash

envsubst  < ./assets/env.template.js > ./assets/env.js

echo 'Start Teiler UI in NGINX in foreground (non-daemon-mode)'
exec nginx -g 'daemon off;'
