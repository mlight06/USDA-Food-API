import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableContainer, Button } from "@mui/material";

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
      .catch(err => console.error(err))
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
        <TableContainer sx={{ maxHeight: 200, maxWidth: 400, alignItems: "center" }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Item: {item.description}</TableCell>
                <TableCell>Calories: {item.calories}</TableCell>
                <Button value={item.description} onClick={e => removeFromCart(e)}>X</Button>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


      )
      )
        : <div>Nothing in cart</div>
      }
      </div>
      <div>{showCalories ?  <div>Total calories of cart: {totalCalories}</div>
      : null}
      </div>
      <Button onClick={calculateCalories}>Calculate total calories</Button>
    </div>
  )
}