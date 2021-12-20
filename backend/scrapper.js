const request = require('request');
const cheerio = require('cheerio');
var URL = "https://twitter.com/search?q=%23RedNotice&src=trend_click&vertical=trends";
request(URL, function (err, res, body) {
    if (err) {
        console.log(err);
    }
    else {
        let $ = cheerio.load(body);  //loading content of HTML body
        $('li.stream-item').each(function (index) {
            var name = $(this).find('.fullname').text();
            var tweet = $(this).find('p.tweet-text').text();
            console.log('user : ' + name);   //name of the user
            console.log('tweet : ' + tweet);   //tweet content
        });
    }
});