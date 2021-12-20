import React from 'react'

function Table({ results }) {
    console.log("result" + (results))
    return (
        <div>
            <table style={{ color: "black", height: "500px", width: "800px" }}>
                <tbody style={{ color: "black", height: "auto", width: "800px" }} >

                    {
                        results.map((ele) => {
                            <tr>
                                <td> {ele}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table
