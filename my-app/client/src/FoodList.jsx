import React, {useEffect, useState} from "react";
import axios from 'axios';
import { API_KEY } from "./config";
import FoodItem from "./FoodItem";
import Cart from "./Cart";

export default function FoodList(props) {
  const {searchItem} = props;
  const [foodList, setFoodList] = useState([]);
  const [cartList, setCartList] = useState([]);
  console.log('searchItem', searchItem,'foodList', foodList)

  useEffect(() => {
    axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchItem}&pageSize=10&api_key=${API_KEY}`)
    .then(response => {
      setFoodList(response.data.foods);
      console.log('response', response.data.foods)
    })
    .catch(err => console.error(err))
  },[searchItem])

  return (
    <div>
      <Cart cartList={cartList} setCartList={setCartList}/>

    <div>
      {foodList.length > 0 ? foodList.map((foodItem) => (
        <FoodItem foodItem={foodItem} setCartList={setCartList}/>
        ))
      :null}
    </div>
    </div>
  )

}
