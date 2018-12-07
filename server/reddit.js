//Part 2

const path = require('path');
const fs = require('fs');
//const request = require('request-promise');
const request = require('request');


let dataPath = path.join(__dirname, '../popular-articles.json');

request('https://www.reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    let articleInfo = [];


    //fs.writeFile(dataPath, res.body, err => {
    //  if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {

        let articleDetails = {
            "title": item.data.title,
            "url": item.data.url,
            "author": item.data.author
        }
        articleInfo.push(JSON.stringify(articleDetails));

        fs.writeFile(dataPath, JSON.stringify(articleInfo, null, 2), err => {
            if (err) console.log(err);

        })



    });

    //fs.appendFileSync(dataPath, articleInfo);

    // });







});

