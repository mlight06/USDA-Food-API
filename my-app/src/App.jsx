import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios';
import { API_KEY } from './config';


function App() {


useEffect(() => {
  axios.get(`https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${API_KEY}`)
  .then(response => console.log('response', response))
  .catch(err => console.error(err))
}
)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
