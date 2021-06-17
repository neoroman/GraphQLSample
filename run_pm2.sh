#!/bin/sh
PM2=`which pm2`
NPM=`which npm`
##
## Argument Test
##
INPUT="$1"
if test -z $INPUT; then
  echo "Usage: $0 <realdb|testdb>"
  echo "       realdb: GraphQLSample mysql commercial database"
  echo "       testdb: GraphQLSample mysql test database"
  echo ""
  exit
fi

if [ ! -f package-lock.json ]; then
  echo "Run ``npm install`` first !!!"
  echo ""
  exit
elif [ -f $NPM ]; then
    echo "No pm2 module, run 'npm install pm2 -g'"
else
  $NPM update
fi

INPUT=$(echo $INPUT | awk '{print tolower($0)}')
if [ -f $PM2 ]; then
  if [[ "${INPUT}" == "realdb" ]]; then
    $PM2 start --name "angelnet" npm -- run-script server
    echo "PM2: GraphQLSample => \033[33;5m``Real`` DB Serving!\033[0m"
  else
    $PM2 start --name "angelnet-test" npm -- run-script server-test
    echo "PM2: GraphQLSample => \033[33;5m``Test`` DB Serving!\033[0m"
  fi
else
    echo "No pm2 module, run 'npm install pm2 -g'"
fi
