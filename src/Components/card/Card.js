import React, { useState } from "react";
import styles from "./card.module.css"
import RatingStars from "../Ratings/RatingStars";



const Card = ({product,addProduct,removeProduct}) =>
{
  const [addList, addedList] =useState(false)

const add = ()=> {
  if(addList){
    addedList(false)
    removeProduct(product);
  }
 else{
  addedList(true)
  addProduct(product);
 }
}
    return(
        <div className={styles.container}>
        <img src={product.image} alt="shirt" className={styles.cardImage} />
        <div>
        <RatingStars value={product.value}/>
      </div>
      <h2>{product.price}</h2>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <button onClick={()=>add()}>
      &nbsp;
        {addList? "Added": "Add"}
      </button>
      </div>
      
        </div>
    )
}

export default Card