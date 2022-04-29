const fs = require('fs');

console.log("TEST")

let rawData = fs.readFileSync('./data.json');
let dat = JSON.parse(rawData);

console.log(dat.db[0].data.posts[0].mobiledoc);