//Part 2 of node lab assignment

// building data path
const path = require('path');

// accessing the file system
const fs = require('fs');

//const request = require('request-promise');
const request = require('request');

//establish data path to file where the array will wrtie to
let dataPath = path.join(__dirname, '/popular-articles.json');

//request to go out to site
request('https://www.reddit.com/r/popular.json', (err, res, body) => {

    //console log error if error exists
    if (err) console.log(err);

    //create array to hold title, url and author 
    let articleInfo = [];

    //parse received data and loop through title, url and author
    JSON.parse(body).data.children.forEach(item => {

        let articleDetails = {
            "title": item.data.title,
            "url": item.data.url,
            "author": item.data.author
        }

        //push each title/url/author string onto the array
        articleInfo.push(JSON.stringify(articleDetails));

    })

    //write to the popular-articles.json file
    fs.writeFile(dataPath, JSON.stringify(articleInfo, null, 2), err => {
        //output error message to screen if found
        if (err) console.log(err);

    });

});

