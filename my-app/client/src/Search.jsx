import React, {useEffect, useState} from "react";
import FoodList from "./FoodList";
import { Container, TextField } from "@mui/material";

export default function Search() {
  const [searchItem, setSearchItem] = useState('');

  return (
    <Container sx={{maxWidth: 700}}>
        <form >
        <label >
            <Container sx={{maxWidth: 400 }}>Search food items</Container>
        </label>
        <TextField
            sx={{maxWidth: 700, maxHeight: 100}}
            type="text"
            id="header-search"
            placeholder="Search food item"
            name="s"
            onInput={e => setSearchItem(e.target.value)}
        />
        {/* <button type="submit" onClick={searchFood}>Search</button> */}
        </form>
      <FoodList searchItem={searchItem}/>
    </Container>
  )
}