import React, { useState } from 'react'
import { useLocation } from "react-router-dom"

import BarWave from "react-cssfx-loading/lib/BarWave";
function AnalyzeTweet({ props }) {
    // for getting tweet from home page componet to analyzze component 
    const location = useLocation();
    const [loading, setLoading] = useState(true)
    const tweet = location.state;
    const clickHandler = () => {

        setLoading(false);
    }
    return (<>
        {location.state != undefined

            ?
            <div>
                < div >
                    <h1 style={{ "color": "black", backgroundColor: "#5b8fef", border: "5px solid #5b8fef ", textAlign: "center", color: "white", padding: "10px", }}>Tweets Title: <b>{tweet.tweets.name}



                    </b></h1>

                </div >
                <a style={{ color: "black", padding: "30px", marginTop: "30px" }} href={tweet.tweets.url}>Visit for Details: {tweet.tweets.url}</a>
                <h3 style={{ border: "5px solid #5b8fef ", color: "black", padding: "10px", marginTop: "30px" }}>Tweet Volumn:{tweet.tweets.tweet_volume}</h3>
                {loading == true ?
                    <button type="submit" style={{ marginLeft: "400px", marginTop: "50px" }} className="register-btn" onClick={clickHandler}>Analyze Tweet</button>
                    :
                    <div>
                        <BarWave color="#5B8FEF" width="80px" height="50px" duration="2s" style={{ marginLeft: "450px", marginTop: "70px" }} />

                        <p style={{ marginLeft: "400px", marginTop: "50px" }}>Analyzing Your Tweet</p>
                    </div>
                }
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
