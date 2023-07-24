import React from "react";
import styles from "./ratingstars.module.css";




const RatingStars = ({ value }) => {
  const filledStars = Math.floor(value); // Number of filled stars

  return (
    <div className={styles.ratingStars}>
      {Array(5).fill(null).map((_,index) => (
        <span
          key={index}
          className={`${styles.star} ${index < filledStars ? styles.filled : styles.empty}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;