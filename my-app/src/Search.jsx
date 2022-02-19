import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Search() {
  const [searchItem, setSearchItem] = useState('');
  console.log('searchItem', searchItem)


  return (
    <div>
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search food items</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search food item"
            name="s"
            onInput={e => setSearchItem(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>

    </div>
  )
}