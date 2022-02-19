import React, {useState, useEffect} from "react";

export default function FoodItem(props) {
  const [additionalDetails, setAdditionalDetails] = useState(false);
  const {foodItem} = props;

  function additionalDetToTrue() {
    setAdditionalDetails(true);
  }

  return (
       <div>
          <div onClick={additionalDetToTrue}>{foodItem.description}</div>
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