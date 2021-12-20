import React from 'react'
import { useState, useEffect } from 'react'
function ListUser() {
    const [local, setLocal] = useState([])
    const [dat, setdat] = useState("")
    const [count, setCount] = useState(0)
    useEffect(() => {
        setdat(localStorage.getItem(`User${count}`))

        var newStatuses = [...local].concat(dat);

        setLocal(newStatuses)
        setCount(count + 1)
        console.log(local)
        console.log(local)

    }, [dat])
    const clickHandler = (e) => {

        localStorage.removeItem("User")
    }
    return (
        <div style={{ color: "black" }} >
            <h1 style={{ textAlign: "center", backgroundColor: "#2e53d7" }}>Your WatchList
            </h1>

            <button style={{ width: "70vw", border: "2px solid #2c75f4", display: "flex", flexDirection: "row", padding: "10px" }} >
                <h1 style={{ color: "black" }}>{local}</h1>
                <button className="register-btn" style={{ backgroundColor: "#2e53d7", marginTop: "10px", marginLeft: "500px", padding: "10px", color: "white" }} onClick={clickHandler}>Remove</button>
                <button className="register-btn" style={{ backgroundColor: "#2e53d7", marginTop: "10px", padding: "10px" }}>Edit</button>

            </button>



        </div>
    )
}

export default ListUser
