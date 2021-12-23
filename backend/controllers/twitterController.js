const router = require('express').Router()
const { response } = require('express');
const Twitter = require('twitter');
//here we are setting credentials for usign twitter api
const client = new Twitter({
    consumer_key: 'laHZSVlXHGU3DGOMPcSZHd0QN',
    consumer_secret: '43SBOD5vqtxfI41HSQIwCCP99eo2SsubyPxqENy1pm524TxyhP',
    access_token_key: '847823818840186880-ciJilYOAHqiQpd9FSLgwaIzyCwz3fdx',
    access_token_secret: 'CN5IAgUZlqlqY1CncndBGg41wiUF3A7FGIKHD1kbBB9kk'

})

//here getting all the trending topics
router.get('/trends', async (req, res, next) => {
    const id = 23424922;

    const trends = await client.get('trends/place.json', {
        id,

    })
    //checking fot tweet ids
    const dataRetreival = () => {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while (i--) arr[length - 1 - i] = createArray.apply(this, args);
        }

        return arr;
    }
    res.send(trends);
})
// this will help to build our customquery modal to query different type of tweets
router.get('/tweet', async (req, res, next) => {

    //DECODE THE STRING 
    // var decodedStringAtoB = atob(req.query.q);


    const twee = Buffer.from(req.query.q, 'base64').toString()
    console.log(twee)
    const replace = twee.replace("#", "")
    console.log(replace);
    var query = `${replace}`


    const trends = await client.get(`search/tweets.json?q=${query}&result_type=trending`, {}).then((resul) => {
        res.send(resul)
    }).catch((err) => {
        console.log("sorry")
    })
    res.send(trends)
})
//check forspecific users on twitter
router.post("/userSearch", async (req, res, next) => {
    console.log("salik is here")
    const screen_name = req.body.username
    const users = await client.get("users/lookup.json", {
        screen_name,
    })
    res.send(users)
})
router.get("/followerL", async (req, res, next) => {
    const screen_name = "shahid_dx1"
    const users = await client.get("followers/list.json", {
        screen_name,
    })
    res.send(users)
})

router.post("/userShow", async (req, res, next) => {
    const screen_name = req.body.username
    const users = await client.get("users/show.json", {
        screen_name,
    })
    res.send(users)
})
module.exports = router;