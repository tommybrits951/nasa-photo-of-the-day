import React from "react"
import "./components.css"
export default function Desc(props) {
    return (
        <div className="card">
            <div className="img-div">
                <img src={props.data.url} className="desc-img"/>
            </div>
            <div className="card-text">
            <h2>{props.data.title}</h2>
            <h4>Date: {props.data.date}</h4>
            <h3>Description:</h3>
            <p>{props.data.explanation}</p>
        </div>
        </div>
    )
}