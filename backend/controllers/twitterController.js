const router = require('express').Router()
const { response } = require('express');
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'laHZSVlXHGU3DGOMPcSZHd0QN',
    consumer_secret: '43SBOD5vqtxfI41HSQIwCCP99eo2SsubyPxqENy1pm524TxyhP',
    access_token_key: '847823818840186880-ciJilYOAHqiQpd9FSLgwaIzyCwz3fdx',
    access_token_secret: 'CN5IAgUZlqlqY1CncndBGg41wiUF3A7FGIKHD1kbBB9kk'

})


router.get('/trends', async (req, res, next) => {
    const id = 23424922;

    const trends = await client.get('trends/place.json', {
        id,

    })
    res.send(trends);
})
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