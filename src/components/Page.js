import React, {useState, useEffect}from "react"
import "./components.css"
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Page(props) {

console.log(props.data)
return (
<Card key={props.data.date} data={props.data}/>
)
}