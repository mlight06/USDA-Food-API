import React, {useState, useEffect, forceUpdate} from "react";
import axios from "axios";
import { API_KEY } from "./config";
import { TableBody, TableRow, Table, TableCell, Button } from "@mui/material";

export default function FoodItem(props) {
  const [additionalDetails, setAdditionalDetails] = useState(false);
  const {foodItem} = props;
  const {setCartList} = props;
  const fdcId = foodItem.fdcId;
  const description = foodItem.description;
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [fat, setFat] = useState(0);
  const [fetchingData, setFetchingData] = useState(false);
  const [carbohydrate, setCarbohydrate] = useState(0);

   // Will hit API with fdcID, returning nutritional value for item
  useEffect(() => {
    axios.get(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?nutrients=203&nutrients=204&nutrients=205&nutrients=208&nutrients=269&api_key=${API_KEY}`)
    .then(response => {
      const nutrientList = response.data.foodNutrients;
      setCalories(nutrientList[0].amount);
      setProtein(nutrientList[1].amount);
      setFat(nutrientList[2].amount);
      setCarbohydrate(nutrientList[3].amount);
      setSugar(nutrientList[4].amount)
      setFetchingData(true);
    })
    .catch(err => console.error(err ))

  }, [fdcId]);

  function addToCart() {
    const cartObject = {description, calories, protein, fat, carbohydrate, sugar}
      axios.post('/api/cart', cartObject)
      .then(response => {
        axios.get('/api/cart')
        .then(response => setCartList(response.data))
        .catch(err => console.error(err))
      }
        )
      .catch(err => console.error(err))
  }

  function showAdditionalDetails() {
    setAdditionalDetails(!additionalDetails)}


  return (
       <div>
          <div className="itemDescription" onClick={showAdditionalDetails}>{description}</div>
          {/* <div>Brand: {foodItem.brandOwner}</div> */}
          <div>Additional descriptions: {foodItem.additionalDescriptions? foodItem.additionalDescriptions : 'None'}</div>
          <div>{additionalDetails ?
                fetchingData ?
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>

             <div> Calories: {calories} </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
              <div>Protein: {protein}</div>

                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>

              <div>Carbohydrates: {carbohydrate}</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>

              <div>Fats: {fat}</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
              <div>Sugars: {sugar}</div>

                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            : <div>Please wait, fetching data</div>
          : null}
           <Button onClick={addToCart}>Add to cart</Button>
          </div>
        </div>

  )
}