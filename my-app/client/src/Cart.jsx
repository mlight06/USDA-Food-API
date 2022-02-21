import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Cart(props) {
  const {cartList} = props;
  const {setCartList} = props;
  const [totalCalories, setTotalCalories] = useState(0);
  const [showCalories, setShowCalories] = useState(false);

  useEffect(() => {
    axios.get('/api/cart')
    .then(response => setCartList(response.data))
  . catch(err => console.error(err))
  }, []);

  function removeFromCart(e) {
    const description = e.target.value;
    axios.delete(`/api/cart/${description}`)
    .then(response => {
      axios.get('/api/cart')
      .then(response => setCartList(response.data))
    . catch(err => console.error(err))
      alert('removed')
    })
    .catch(err => console.error(err))
  }

  function calculateCalories() {
    axios.get('/api/cart/calories')
    .then(response => setTotalCalories(response.data.rows[0].sum))
    .catch(err => console.error(err))
    setShowCalories(true);
  }



  return (
    <div>Cart:
      <div>
      {cartList.length > 0 ? cartList.map((item) =>
      (
        <div>
          <div>Item: {item.description}</div>
          <div>Calories: {item.calories}</div>
          <button value={item.description} onClick={e => removeFromCart(e)}>X</button>
        </div>


      )
      )
        : <div>Nothing in cart</div>
      }
      </div>
      <div>{showCalories ?  <div>Total Calories of Cart: {totalCalories}</div>
      : null}
      </div>
      <button onClick={calculateCalories}>Calculate total calories</button>
    </div>
  )
}