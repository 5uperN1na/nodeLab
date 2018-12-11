//Part 3 of node lab assignment

// building data path
const path = require('path');

// accessing the file system
const fs = require('fs');

//requesting requests
const request = require('request-promise');

//making http request
const http = require('http');

//making https requests
const https = require('https');

//request to go out to site
request('https://www.reddit.com/r/popular.json', (err, res, body) => {

    let pictures = JSON.parse(body).data.children.forEach(item => {

        //let images = JSON.parse(res.body).data.children.map((item) => {

        let fileExt = path.extname(item.data.url);
        if (fileExt === '.gif' || fileExt === '.jpg') {

            let id = item.data.id;
            //console.log(item.data.id);
            let mediaPath = path.join(__dirname, './downloads', id + fileExt);
            const options = {
                url: item.data.url,
                encoding: null
            };

            request.get(options)
                .then(function (res) {
                    fs.writeFileSync(mediaPath, res);
                });

        }

    })

})

