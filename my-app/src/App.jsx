import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios';
import { API_KEY } from './config';
import FoodList from './FoodList';
import Search from './Search';


function App() {
  return (
    <div className="App">
      <Search />
      <FoodList />
    </div>
  );
}

export default App;
