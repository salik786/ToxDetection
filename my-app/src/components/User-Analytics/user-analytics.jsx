import React, { useState } from 'react'
import axios from "axios"
import "./style-table.css"
import Loading from "./loading-spinner"
import Table from './show-table'
function UserAnalysis() {
    const [userN, setUserN] = useState("")
    const [count, setCount] = useState(0)
    const [data, setData] = useState("")
    const [success, setSuccess] = useState("");
    const [err, setErr] = useState("")
    const handleChange = (e) => {
        setUserN(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(userN)
        setCount(count + 1);
        axios.post("http://localhost:6563/Twitter/userSearch", { username: userN }).then((res) => {
            console.log(res.data)
            setData(res.data)

            setSuccess("")
        }).catch((err) => {
            setErr("No user Found")
            console.log(err);


        })



    }
    const handleList = (e) => {
        e.preventDefault()
        setSuccess("done")

        localStorage.setItem(`User${count}`, data[0].name)
    }
    return (
        <div className="user-ana">

            <form >
                <input type="text" value={userN} onChange={handleChange} style={{ border: "2px solid black", margin: "5px", padding: "15px" }} placeholder="Enter Twitter User You want to Analyze"></input>
                <button type="submit" className="register-btn" onClick={handleSubmit}>Get User Info</button>
                {success == "" ?
                    < button type="submit" className="register-btn" onClick={handleList}>Add to Your List</button>
                    : < button type="submit" className="" style={{ backgroundColor: "#83c958", color: "white", padding: "18px", border: "none" }} >Successfully Added</button>
                }
                <div >
                    {err == "" ?

                        data.length > 0 ? <table id="customers" >
                            <tbody style={{ color: "black", height: "500px", width: "800px" }} >
                                {console.log("data : ", data)}
                                <tr>
                                    <td>ID</td>
                                    <td>{data[0].id}</td>

                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>{data[0].name}</td>

                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{data[0].description}</td>
                                </tr>
                                <tr>
                                    <td>Followers Count</td>
                                    <td>{data[0].followers_count}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{data[0].location}</td>
                                </tr>
                                <tr>
                                    <td>Friends Count</td>
                                    <td>{data[0].friends_count}</td>
                                </tr>
                                <tr>
                                    <td>Retweets Volumn</td>
                                    <td>{data[0].status.retweet_count}</td>
                                </tr>
                                <tr>
                                    <td>Latest Tweet</td>
                                    <td>{data[0].status.text}</td>

                                </tr>
                                <tr>
                                    <td>Tweet/Retweet Count</td>
                                    <td>{data[0].statuses_count}</td>
                                </tr>
                                <tr>
                                    <td>Last Tweet time</td>
                                    <td>{data[0].status.created_at}</td>
                                </tr>
                                <tr>
                                    <td>Latest Tweet Link</td>
                                    {/* <td><a href={data[0].status.entities.urls[0].url} target="_blank">{data[0].status.entities.urls[0].url}</a></td> */}
                                </tr>
                                <tr>
                                    <td>Verified</td>
                                    <td>{data[0].verified}</td>
                                </tr>
                                <tr>
                                    <td>Tweets Count</td>
                                    <td>{data[0].listed_count}</td>
                                </tr>







                            </tbody>
                        </table> :

                            <Loading />

                        : <></>
                    }
                </div>

            </form >


        </div >



    )
}

export default UserAnalysis;
