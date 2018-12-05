const path = require('path');
const fs = require('fs');
//const request = require('request');


//let dataPath = path.join(__dirname, '../chirps.json');


let chirps = ["chirp1", "chirp2", "chirp3", "chirp4", "chirp5"];

//let data = JSON.stringify(chirps);  
//fs.writeFileSync(dataPath, data); 
//fs.writeFileSync(dataPath, data); 

//let data = JSON.stringify(chirps, null, 2);

//fs.writeFile(dataPath, data, (err) => {
  //  if (err) throw err;
    //console.log('Data written to file');
//});

//console.log('This is after the write call');

//var fs = require("fs");
//var fileContent = "hello";

fs.writeFile("./chirps.json", chirps, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
    console.log(chirps);
});

// Content of the file -> hello