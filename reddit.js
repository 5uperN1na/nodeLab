//Part 2

let dataPath = path.join(__dirname, '../popular-articles.json');

request('https://www.reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    console.log(res);


    let articleInfo = [];


    fs.writeFile(dataPath, res.body, err => {
        if (err) console.log(err);

        JSON.parse(body).data.children.forEach(item => {
            //console.log(item.data.title);
            // console.log(item.data.author);
            //console.log(item.data.url);


            //articleInfo.push(item.data.title);
            //articleInfo.push(item.data.author);
            // articleInfo.push(item.data.url);
            //console.log(articleInfo);



            let articleDetails = {
                "title": item.data.title,
                "url": item.data.url,
                "author": item.data.author
            }
            articleInfo.push(JSON.stringify(articleDetails));
        });

    });

});