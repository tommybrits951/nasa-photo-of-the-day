import React from "react"
import "./components.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Desc(props) {
    return (
        <div className="row">
            <div className="col">
            <div className="card">
                <div className="card-body">
            <div className="img-div">
                <img src={props.data.url} className="card-img"/>
            </div>
            <div className="card-text bg-dark">
            <h2>{props.data.title}</h2>
            <h4>Date: {props.data.date}</h4>
            <h3>Description:</h3>
            <p>{props.data.explanation}</p>
        </div>
        </div>
        </div>
        </div>
            </div>
    )
}