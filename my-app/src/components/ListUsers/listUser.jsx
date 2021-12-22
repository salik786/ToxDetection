import React from 'react'
import { useState, useEffect } from 'react'
//this helps to identify the listed favoutie use in our app
function ListUser() {
    const [local, setLocal] = useState([])
    const [dat, setdat] = useState("")
    const [count, setCount] = useState(0)
    useEffect(() => {
        //getting data from localstorage forfavourite users.
        setdat(localStorage.getItem(`User${count}`))

        var newStatuses = [...local].concat(dat);

        setLocal(newStatuses);
        setCount(count + 1);
        console.log(local)

    }, [dat])
    const clickHandler = (e) => {

        localStorage.removeItem("User")
    }
    return (
        <div style={{ color: "black" }} >
            <div >
                <h1 style={{ textAlign: "center", backgroundColor: "#2e53d7" }}>Your WatchList
                </h1>
            </div>
            {
                local.map((item, index) => {
                    return (<>

                        {item !== null && item != "" ?

                            < button style={{ width: "80vw", border: "2px solid #2c75f4", display: "flex", flexDirection: "row", padding: "10px" }} >

                                {console.log(item)}
                                <h2 style={{ color: "black", width: "80%" }}>{item}</h2>
                                <button className="" style={{ backgroundColor: "#2e53d7", marginTop: "10px", marginLeft: "500px", padding: "10px", color: "white" }} onClick={clickHandler}>Remove</button>
                                <button className="" style={{ backgroundColor: "#2e53d7", marginTop: "10px", padding: "10px", color: "white" }}>Edit</button>
                            </button> : <></>
                        }

                    </>)
                })
            }




        </div >
    )
}

export default ListUser
