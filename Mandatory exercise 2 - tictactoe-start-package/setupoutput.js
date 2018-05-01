let fs = require("fs-extra");
let path = require("path");

let output = path.resolve(__dirname, 'output');
let public = path.resolve(__dirname, 'public');

fs.removeSync(output);
fs.copySync(public, output);
