# What you probably need to do
1. npm install
2. npm run watch

#What i have done
1. npm install react browserify watchify 6to5ify --save-dev
2. npm init

Add to scripts property in package.json the watch script

 ` "scripts": {
    "watch": "watchify -t 6to5ify ./src/app.jsx -o ./dist/bundle.js -v"
  },`



