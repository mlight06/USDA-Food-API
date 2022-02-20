import React, {useEffect, useState} from "react";
import FoodList from "./FoodList";

export default function Search() {
  const [searchItem, setSearchItem] = useState('');

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
        {/* <button type="submit" onClick={searchFood}>Search</button> */}
    </form>
    <FoodList searchItem={searchItem}/>
    </div>
  )
}