# What you need to do
npm install
npm run watch

#What i have done
1. npm install react browserify watchify 6to5ify --save-dev
2. npm init

Make scripts property in package.json  looks as follows

'"watch": "watchify -t 6to5ify ./src/app.jsx -o ./dist/bundle.js -v"'



