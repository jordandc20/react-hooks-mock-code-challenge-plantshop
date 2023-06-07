import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const[filterString,setFilterString] = useState('')

  useEffect(() => {
    fetch(' http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlantList(data))
  }, [])

const handleNewPlant = (newPlant)=>{
setPlantList(plantList.concat(newPlant))
}

const visiblePlants = plantList.filter(plant => plant.name.toLowerCase().includes(filterString.toLowerCase()))

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search onFilter={setFilterString} filterString={filterString}/>
      <PlantList plantList={visiblePlants}/>
    </main>
  );
}

export default PlantPage;
