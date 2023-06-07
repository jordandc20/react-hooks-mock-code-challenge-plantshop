import React, { useState } from "react";

function PlantCard({ plant }) {

  const {  image, name, price } = plant
  const [isInStock, setIsInStock] = useState(true)

  const handleStock = () =>
{
  setIsInStock(isInStock=>!isInStock)

}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
