import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {

const plant = plantList.map(plant=>(
  <PlantCard key={plant.id} plant={plant} />
))

  return (
    <ul className="cards">
      {plant}
      </ul>
  );
}

export default PlantList;
