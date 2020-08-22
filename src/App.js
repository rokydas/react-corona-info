import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="main">
          <h1>Corona Info</h1>
          {/* <input id="country-input" type="text" placeholder="Enter country"/>
          <button onClick={Search}>Search</button> */}
          <CoronaInfo keyword="bangladesh"></CoronaInfo>
        </section>
      </header>
    </div>
  );
}

function CoronaInfo(props){
  // console.log(props);
  const keyword = props.keyword;
  console.log(keyword);
  const [info, setInfo] = useState('');
  useEffect( () => {
    fetch(`https://corona.lmao.ninja/v2/countries/${keyword}`)
    .then(res => res.json())
    .then(data => setInfo(data))
      // console.log(data);
      // const cases = data.cases;
      // const todayCases = data.todayCases;
      // const deaths = data.deaths;
      // const todayDeaths = data.todayDeaths;
      // const recoverd = data.recoverd;
      // const todayRecovered = data.todayRecovered; 
    
  });
  return (
    <div>
      {/* <h3>Kene color?{props.keyword}</h3> */}
      <h3>Total Cases: {info.cases}</h3>
      <h3>Today Cases: {info.todayCases}</h3>
      <h3>Deaths: {info.deaths}</h3>
      <h3>Today Deaths: {info.todayDeaths}</h3>
      <h3>Recovered: {info.recovered}</h3>
      <h3>Today Recovered: {info.todayRecovered}</h3>
    </div>
  )
}

export default App;
