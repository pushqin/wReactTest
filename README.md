
Crated in order to make all react initial work in webstorm and not in jsfiddle.
That is not the final solution thoooo.

# What you probably need to do
1. `npm install`
2. `npm run watch`

#What i have done
1. `npm install react browserify watchify 6to5ify --save-dev`
2. `npm init` Creates package.json file

3. Add to scripts property in package.json the watch script
 ```
 "scripts": {
    "watch": "watchify -t 6to5ify ./src/app.jsx -o ./dist/bundle.js -v"
  },
  ```
  
4. `npm run watch`

Creates bundle.js in dist file and updates it each time when we save here, then hit refresh on browser and you will see the result

#Usefull staff

## Webstorm Plugins
1. `markdown` - For md files.
2. `.ignore` - For github ignore files.


