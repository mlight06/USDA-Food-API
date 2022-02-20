import React, {useState, useEffect} from "react";
import axios from "axios";
import { API_KEY } from "./config";

export default function FoodItem(props) {
  const [additionalDetails, setAdditionalDetails] = useState(false);
  const {foodItem} = props;
  const fdcId = foodItem.fdcId;
  const description = foodItem.description;
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [fat, setFat] = useState(0);
  const [carboyhydrate, setCarboyhydrate] = useState(0);


  console.log('fdcId', fdcId)
  // Will hit API with fdcID, returning nutritional value for item
  function additionalDetToTrue() {
    setAdditionalDetails(!additionalDetails);
    axios.get(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?nutrients=203&nutrients=204&nutrients=205&nutrients=208&nutrients=269&api_key=${API_KEY}`)
    .then(response => {
      let nutrientList = response.data.foodNutrients;
      console.log('calories', nutrientList[0].amount)
      setCalories(nutrientList[0].amount);
      setProtein(nutrientList[1].amount);
      setFat(nutrientList[2].amount);
      setCarboyhydrate(nutrientList[3].amount);
      setSugar(nutrientList[4].amount)
      console.log('FOODITEMresponse', response.data.foodNutrients)
      console.log('nutrients', calories, protein, fat, carboyhydrate, sugar)

    })
    .catch(err => console.error(err))
  }

  function addToCart() {

  }

  return (
       <div>
          <div onClick={additionalDetToTrue}>{description}</div>
          <div>Brand: {foodItem.brandOwner}</div>
          <div>Additional descriptions: {foodItem.additionalDescriptions? foodItem.additionalDescriptions : 'None'}</div>

          <button>Add to cart</button>
          <div>{additionalDetails ?
            <div>
             <div>{foodItem.foodNutrients[0].nutrientName}</div>
            </div>
          : null}
          </div>
        </div>

  )
}