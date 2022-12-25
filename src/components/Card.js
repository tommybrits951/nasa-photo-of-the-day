import React from "react"
import Desc from "./Desc"
export default function Card(props) {
    const paper = props.data
    console.log(paper)
   return (
<div>
       {paper.map(dat => {
           return <Desc key={dat.date} data={dat}/>
        })}
        </div>
        )
}