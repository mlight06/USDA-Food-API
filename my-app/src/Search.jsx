import React, {useEffect, useState} from "react";
import axios from "axios";
import FoodList from "./FoodList";
import { API_KEY } from "./config";

export default function Search() {
  const [searchItem, setSearchItem] = useState('');
  const [foodList, setFoodList] = useState([]);
  console.log('searchItem', searchItem)

function search() {
  console.log('made it to search')
  axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchItem}&api_key=${API_KEY}`)
  .then(response => {
    setFoodList(response.data);
    console.log('response', response.data)
  })
  .catch(err => console.error(err))
}
  return (
    <div>
        <form >
        <label >
            <span>Search food items</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search food item"
            name="s"
            onInput={e => setSearchItem(e.target.value)}
        />
        <button type="submit" onClick={search}>Search</button>
    </form>
    <FoodList searchItem={searchItem} foodList={foodList}/>
    </div>
  )
}