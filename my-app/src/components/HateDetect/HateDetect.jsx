import React from 'react'
import "./hatedetect-style.css"
import { BsFillInfoCircleFill } from "react-icons/bs"
function HateDetect() {
    return (
        <div className="outer-hate">
            <div className="hatecheck">
                <h1>Check hate or Non Hate Speech</h1>

            </div>
            <div className="instruct">
                <input type="search" name="" id="" className="hate-search-inp" /><button>Check Hate</button>
                <p > <BsFillInfoCircleFill />Instructions:This Model will only detect hate speeches in Roman Urdu.If you write Sentence in english it will remove english letters and only extract Roman urdu keywords</p>

            </div>
            <div className="hate-stat">
                <ul>
                    <li className="hate-li">Total number of Words:
                        <b className="hate-words">{"bewakof"}</b>
                    </li>
                    <li className="hate-li">Hate Speech Key Words in Sentence:{ }</li>
                    <li className="hate-li">Percentage of hate speech :{ }</li>
                    <li className="hate-li">Common Hate Speech Words:{ }</li>

                </ul>
            </div>


        </div>
    )
}

export default HateDetect
