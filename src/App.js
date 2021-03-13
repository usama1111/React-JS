import React, { useEffect, useState } from 'react'
import './App.css';
const App = () => {
  const [data, setData] = useState(null)
  const fetchURL = "https://jsonplaceholder.typicode.com"
  const getData = () =>
    fetch(`${fetchURL}/posts`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])
console.log(data);
  return (
    <div>

<div  className="myDIV">
<h1>Developed By Usama Bantwa </h1>
<h1>    Email: usamasohail1999@gmail.com </h1>
<h1> WhatsApp: +923463000226</h1>
</div>

<h1 className="Text" > Api integration</h1>

      {data?.map((item) => 
        <ul>
            <h1>id: {item.id} <br/> title: {item.title}</h1>
          <li><strong>body:- </strong> {item.body}</li>
        </ul>
      )}
    </div>
  )
}

export default App;
