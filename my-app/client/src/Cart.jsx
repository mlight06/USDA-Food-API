import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Cart(props) {
  const {cartList} = props;
  const [deletedItem, setDeletedItem] =useState('');

  useEffect(() => {
    axios.get('/api/cart')
    .then(response => cartList = [...cartList, response.data])
    .catch(err => console.error(err))
  }, []

  )
  function removeFromCart(e) {
    const description = e.target.value;
    axios.delete(`/api/cart/${description}`)
    .then(response => {
      alert('removed')
    })
    .catch(err => console.error(err))
  }

  return (
    <div>Cart:
      <div>
      {cartList.length > 0 ? cartList.map((item) =>
      (
        <div>
          <div>{item.description}</div>
          <button value={item.description} onClick={e => removeFromCart(e)}>X</button>
        </div>
      )
      )
        : <div>Nothing in cart</div>
      }
      </div>
    </div>
  )
}