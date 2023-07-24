import React from "react";
import Card from "../Components/card/Card";
import productData from "./Product.json"
import styles from "./content.module.css"


const Content = ({addProduct,removeProduct}) =>
{
    return(
        <div className={styles.container}>
        {productData.map((product) => (
          
            <Card
              product={product}
              key={product.id}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          ))}    
    </div>
    )
}

export default Content