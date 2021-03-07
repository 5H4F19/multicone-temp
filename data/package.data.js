export const packageData = (name) => {
    return `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "Multicone app",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1"
  }
}
`}