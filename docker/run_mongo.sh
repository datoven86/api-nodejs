#!/bin/bash
set -m

mongodb_cmd="mongod --auth"

echo "HOLA"

$mongodb_cmd &

echo "HOLA2"
# Wait for MongoDB to boot
RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MongoDB service startup..."
    sleep 5
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
done

mongo --eval "db.getSiblingDB('admin').createUser({user: 'admin', pwd: 'admin1234', roles:[{role:'root',db:'admin'}]});"
# mongo --eval "use 'api-nodejs';db.createCollection('users');"
