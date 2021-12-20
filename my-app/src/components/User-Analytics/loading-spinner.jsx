import React from 'react'
import Hyposis from "react-cssfx-loading/lib/Hypnosis";
function Loading() {
    return (
        <div style={{ marginLeft: "350px", marginTop: "200px" }}>

            <Hyposis color="#1C3F82" width="60px" height="60px" duration="1s" style={{ marginLeft: "60px", marginBottom: "15px" }} /><p>Waiting User to Search Data
            </p>
        </div>
    )
}

export default Loading
