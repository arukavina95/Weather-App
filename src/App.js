import React, {useState} from 'react';
import axios from 'axios'

function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');

 const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5d5a78eb172372be098f139deadd143c&units=metric`;

 const search =(event)=>{
  if(event.key === 'Enter'){
  axios.get(url).then((response)=>{
    setData(response.data)
    console.log(response.data)
  })

  setLocation('')
 }
}

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={search}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
