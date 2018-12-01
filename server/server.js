const path = require('path');
const fs = require('fs');
const request = require('request');


let dataPath = path.join(__dirname, '../chirps.json');

let chirps = ["chirp1", "chirp2", "chirp3", "chirp4", "chirp5"];

let data = JSON.stringify(chirps);  
fs.writeFileSync(dataPath, data); 

