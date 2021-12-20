import React from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { useState } from 'react'
import "./homedash-style.css"
import Tweets from './DummyTweets'
import { useEffect } from "react"
import axios from "axios"
function TrendTweets() {

    const [trendTweets, setTrendTweets] = useState(Tweets)
    const [searchTweet, setSearchTweet] = useState("")
    const { url, path } = useRouteMatch();
    useEffect(() => {
        axios.get("http://localhost:6563/Twitter/trends").then((response) => {
            console.log(response.data[0].trends);
            setTrendTweets(response.data[0].trends)
        }).catch((err) => {
            console.log(err)
        })

    }, [])
    const handleSearch = (e) => {

        const value = e.target.value;
        setSearchTweet(value);
        // console.log(searchTweet);
        // const valueSearch = e.value;
        // setSearchTweet(valueSearch)

    }


    return (
        <div className="trend-tweets">
            <div className="trend-heading">Trending on Twitter</div>
            <input type="search" name="searchbar" id="searchbar" placeholder="Search Tweets without #" value={searchTweet} className="search-bar" onChange={handleSearch} />
            <button className="search-btn"  >Search</button>


            <ul className="trend-list scrollbar-colored">
                <p className="heading-ana">Click on Tweet to Check its Analytics</p>
                {trendTweets.map((tweet, index) => (

                    searchTweet === "" ? //check if 
                        <li className="trend-list-li" key={index}>
                            <div >
                                <Link to={{
                                    pathname: "/dashboard/analyzer/tweet",
                                    state: {
                                        tweets: tweet
                                    }
                                }}> {tweet.name}
                                </Link>

                            </div>
                            <div>
                                <p className="nooftweets">{tweet.tweet_volume}</p>
                            </div>
                        </li> :
                        tweet.name.toLowerCase().includes(searchTweet.toLowerCase()) ?

                            <li className="trend-list-li" key={index}>
                                {console.log(searchTweet)}
                                <div >
                                    <Link style={{ "Color": "white" }} to={{
                                        pathname: "/dashboard/analyzer/",
                                        state: {
                                            tweets: tweet
                                        }
                                    }} > <p style={{ "Color": "white" }}>{tweet.name}</p></Link>
                                </div>
                                <div>
                                    <p className="nooftweets">{tweet.tweet_volume}</p>
                                </div>
                            </li> : <></>
                ))}

            </ul>

        </div>
    )


}

export default TrendTweets
