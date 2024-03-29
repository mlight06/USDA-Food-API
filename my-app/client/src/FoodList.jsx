import React, {useEffect, useState} from "react";
import axios from 'axios';
import { API_KEY } from "./config";
import FoodItem from "./FoodItem";
import Cart from "./Cart";
import Paginate from "./Paginate";
import {Table, TableBody, TableRow, TableCell, TableContainer, Container} from "@mui/material";

export default function FoodList(props) {
  const {searchItem} = props;
  const [foodList, setFoodList] = useState([]);
  const [cartList, setCartList] = useState([]);

  //Implementation of Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);
  // ending index to slice results array
  const indexOfLastPage = currentPage * resultsPerPage;
  // starting index, based on ending results
  const indexOfFirstPage = indexOfLastPage - resultsPerPage;

  const displayedResults = foodList.slice(indexOfFirstPage, indexOfLastPage)

  console.log('displayedResults', displayedResults, 'first', indexOfFirstPage, 'last', indexOfLastPage, 'curr', currentPage, resultsPerPage)

  function setPageNumber(pageNumber) {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    // axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchItem}&pageSize=100&api_key=${API_KEY}`)
    // .then(response => {
    //   setFoodList(response.data.foods);
    //   console.log('displayedResults', displayedResults, 'foodlist length', foodList.length)
    // })
    // .catch(err => console.error(err))
    const APIResults = async () =>  {
      const results = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchItem}&pageSize=100&api_key=${API_KEY}`);
      console.log('APIREsults',  results.data.foods)
      setFoodList(results.data.foods)
    }
    APIResults()
  },[searchItem])

  return (
    <Container sx={{maxWidth: 700}}>
      <Cart cartList={cartList} setCartList={setCartList}/>
      <Container sx={{maxWidth: 700}} className="foodList-container">
        {foodList.length > 0 ? displayedResults.map((foodItem) => (

                  <FoodItem foodItem={foodItem} setCartList={setCartList}/>

          ))
        :null}
      </Container>
      <Container>
          <Paginate totalResults={foodList.length} resultsPerPage={resultsPerPage} setPageNumber={setPageNumber} />
      </Container>
    </Container>
  )

}
