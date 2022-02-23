import React from "react"
import { useParams } from "react-router-dom";

const Section = () => {
    const params = useParams();
    return (
        <div style={{borderRight: "2px solid rgba(36, 39, 49, 1)", padding: "0px 30px", color:"#fff", borderLeft: "2px solid rgba(36, 39, 49, 1)", height: "100vh"}}>
            <h1>I am section {params.id}</h1>
        </div>
    )
}

export default Section;