const path = require('path');
const fs = require('fs');
const request = require('request');


//PART 1
//let chirps = ["chirp1", "chirp2", "chirp3", "chirp4", "chirp5"];

//fs.writeFile("./chirps.json", chirps, (err) => {
// if (err) {
// console.error(err);
// return;
// };
// console.log("File has been created");
// console.log(chirps);
//});

//Part 2

let dataPath = path.join(__dirname, '../reddit.js');

request('https://www.reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    console.log(res);


   //let articleInfo = [];


    fs.writeFile(dataPath, res.body, err => {
        if (err) console.log(err);

        JSON.parse(body).data.children.forEach(item => {
            console.log(item.data.title);
           // console.log(item.data.author);
            //console.log(item.data.url);

    
            //articleInfo.push(item.data.title);
            //articleInfo.push(item.data.author);
           // articleInfo.push(item.data.url);
            //console.log(articleInfo);

        });

    });

});