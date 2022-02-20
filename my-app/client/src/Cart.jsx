import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Cart(props) {
  const {cartList} = props;

  // useEffect(() => {
  //   axios.get('/api/cart')
  //   .then(response => setCartItems(response.data))
  //   .catch(err => console.error(err))
  // }, []

  // )
  function removeFromCart() {
    console.log('removed')
  }

  return (
    <div>Cart:
      <div>
      {cartList.length > 0 ? cartList.map((item) =>
      (
        <div>
          <div>{item.description}</div>
          <button onClick={removeFromCart}>X</button>
        </div>
      )
      )
        : <div>Nothing in cart</div>
      }
      </div>
    </div>
  )
}