//Part 1 of node lab assignment

// building data path
const path = require('path');

// accessing the file system
const fs = require('fs');

//create an array with chirp objects
let chirps = {
    chirp1: "beep",
    chirp2: "beep, beep",
    chirp3: "beep, beep, beep",
    chirp4: "beep, beep, beep, beep",
    chirp5: "beep, beep, beep, beep, beep"
}

//establish data path to file where the array will wrtie to
let dataPath = path.join(__dirname, '../chirps.json');

//write chirps to the chirps.json file
fs.writeFile(dataPath, JSON.stringify(chirps, null, 2), err => {
    //output error message if error is found
    if (err) console.log(err);
    //output message after file created and written to
    console.log ("File has been created.")

})

//read chirps.json file
fs.readFile(dataPath, (err, data) => {
    //out put error if error found when reading file
    if (err) console.log(err);
    //output data from file 
    console.log(JSON.parse(data));
})






