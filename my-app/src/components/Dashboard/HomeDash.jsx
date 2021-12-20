import React from 'react'
import TrendTweets from './TrendTweets';
import "./homedash-style.css"
import { Chart } from "react-google-charts"

function HomeDash(props) {
    console.log(props)
    return (
        <div >

            <div className="row">

                <div className="col2">
                    <div className="user-name">

                        <div className="user-name-content">
                            <h2>Hi, {"salik"}</h2><p>
                                Lorem ipsum dolor sit  omnis optio rem placeat itaque delectus at adipisci provident suscipit amet commodi est voluptatem unde!
                            </p>
                            <button className="user-content-button">Check Analytics</button>
                        </div>
                        <div className="user-name-img">
                            <img src="https://i.ibb.co/Y2zvvJx/Pngtree-isometric-data-analysis-design-5345572.png" alt="Pngtree-isometric-data-analysis-design-5345572" border="0" ></img>
                        </div>

                    </div>
                    <div className="boxes">
                        <div className="box1">Box1</div>

                        <div className="box2">Box2</div>
                    </div>

                    <div>
                        <h3 className="chart-heading">Chart</h3>
                        <Chart className="chart"

                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['x', 'dogs'],
                                [0, 0],
                                [1, 10],
                                [2, 23],
                                [3, 17],
                                [4, 18],
                                [5, 9],
                                [6, 11],
                                [7, 27],
                                [8, 33],
                                [9, 40],
                                [10, 32],
                                [11, 35],
                            ]}
                            options={{
                                hAxis: {
                                    title: 'Time',
                                },
                                vAxis: {
                                    title: 'Popularity',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                </div>

                <div className="col1-trendtweet">
                    <TrendTweets />
                </div>
            </div>
        </div>
    )
}

export default HomeDash;