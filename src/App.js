import React, {useState, useEffect} from "react";
import "./App.css";
import { baseURL, apiKey, count } from "./components/constants";
import Page from "./components/Page.js";
import axios from "axios";
function App() {
  const [data, setData] = useState()


   useEffect(() => {
     axios.get(`${baseURL}api_key=${apiKey}${count}`)
     .then(res => {
       setData(res.data)
      })
      .catch(err => {
        console.error(err);
      })
    }, [])  
    return(
      <div>
    {data && <Page data={data}/>}
    </div>
    )
}

export default App;
