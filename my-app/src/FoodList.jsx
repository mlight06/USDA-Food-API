import React, {useEffect, useState} from "react";
import axios from 'axios';
import { API_KEY } from "./config";

export default function FoodList(props) {
  const {searchItem} = props;
  // const {foodList} = props;
  const [foodList, setFoodList] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState(false);
  console.log('searchItem', searchItem,'foodList', foodList)

  useEffect(() => {
    axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchItem}&pageSize=10&api_key=${API_KEY}`)
    .then(response => {
      setFoodList(response.data.foods);
      console.log('response', response.data.foods)
    })
    .catch(err => console.error(err))
  },[searchItem])

  function additionalDetToTrue() {
    setAdditionalDetails(true);
  }

  return (
    <div>
      {foodList.length > 0 ? foodList.map((foodItem) => (
        <div>
          <div onClick={additionalDetToTrue}>{foodItem.description}</div>
          <div>{additionalDetails ?
            <div>
             <div>{foodItem.foodNutrients[0].name}</div>
            </div>
          : null}
          </div>
        </div>

        ))
      :null}
    </div>
  )

}
