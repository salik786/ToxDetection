import React from 'react'
import "./dictionary-style.css"
import words from './DummyWords'
import posWords from './DummyPosWords'
function Dictionary() {
    return (
        <div className="row-dict">
            <div className="col-left">
                <input type="text" name="" id="" className="inp-word" placeholder="Add Positive Word in Dictionary" /><button type="submit" className="add-word">Add Word</button>
                <h3>Positive Word Dictionary</h3>
                <ul className="ul-dict">
                    {posWords.map((word, index) => {
                        console.log(word);
                        return <li className="li-dict">{index + 1} . {word}</li>
                    })}
                </ul>
            </div>
            <div className="col-right">
                <input type="text" name="" id="" className="inp-word" placeholder="Add Negative Word in Dictionary" /><button type="submit" className="add-word">Add Word</button>
                <h3>Negative Word Dictionary</h3>
                <ul className="ul-dict">
                    {words.map((word, index) => {
                        console.log(word);
                        return <li className="li-dict">{word}</li>

                    })}
                </ul>
            </div>
        </div>
    )
}

export default Dictionary
