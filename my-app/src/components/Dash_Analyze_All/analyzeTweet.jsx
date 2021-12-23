import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import axios from "axios"
import BarWave from "react-cssfx-loading/lib/BarWave";
import { useEffect } from 'react';
function AnalyzeTweet({ props }) {
    // for getting tweet from home page componet to analyzze component 
    const location = useLocation();
    const [loading, setLoading] = useState(true)
    const tweet = location.state;
    const [tweetData1, setTweetData] = useState([]);
    //here wewill get the latest tweets from this trending topics
    useEffect(() => {
        console.log(tweet.tweets.name)
        const data = tweet.tweets.name;
        let buff = new Buffer(data);
        let stringToBase64 = buff.toString('base64');
        if (location.state != undefined) {
            axios.get(`http://localhost:6563/Twitter/tweet?q=%23${stringToBase64}`).then((res) => {
                console.log(res.data.statuses)
                setTweetData(res.data.statuses)
            }).catch((err) => {
                console.log(err)
            })
        }

    }, [])

    //loading tocheck if data come or not
    const clickHandler = () => {

        setLoading(false);
    }
    console.log("tasdas", tweetData1)
    return (<>
        {location.state != undefined

            ?
            <div>
                < div >
                    <h1 style={{ "color": "black", backgroundColor: "#5b8fef", border: "5px solid #5b8fef ", textAlign: "center", color: "white", padding: "10px", }}>Tweets Title: <b>{tweet.tweets.name}
                    </b></h1>


                </div >

                {loading == true ?
                    <button type="submit" style={{ marginLeft: "400px", marginTop: "5px" }} className="register-btn" onClick={clickHandler}>Analyze Tweet</button>

                    :
                    <div>
                        <BarWave color="#5B8FEF" width="80px" height="50px" duration="2s" style={{ marginLeft: "450px", marginTop: "70px" }} />

                        <p style={{ marginLeft: "400px", marginTop: "20px" }}>Analyzing Your Tweet</p>

                    </div>
                }
                <h3 style={{ border: "5px solid #5b8fef ", color: "black", padding: "10px", marginTop: "10px" }}>Tweet Volumn:{tweet.tweets.tweet_volume}</h3>
                <>

                    <div style={{ margin: "20px" }}>
                        <h3 style={{ padding: "10px" }}>Latest Tweets from this topics</h3>
                        {

                            tweetData1 ?

                                tweetData1.map((item, index) => {
                                    return (
                                        <>
                                            <h5 style={{ color: "black", border: "1px solid black", padding: "5px" }}>

                                                {item.text}

                                            </h5>

                                            <></>
                                        </>
                                    )
                                }) : <></>
                        }</div>
                </>


            </div>

            :
            // if we don't directly send data from dashboard trending tweets.Then this will run()
            <>
                <h1 style={{ "color": "black" }}>Hello</h1>

            </>
        })
    </>)

}

export default AnalyzeTweet
