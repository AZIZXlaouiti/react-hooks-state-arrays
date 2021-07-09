import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterby,setFilter] = useState('All')

   const filterFood = foods.filter((food)=>{
     if (filterby === 'All'){
       return true 
     }
   else{
     return food.cuisine === filterby
   }
 })
 function handleOption(e){
  setFilter(e.target.value)
 }
  const foodList = filterFood.map((food) => (
    <li onClick={()=>handleUpdate(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: { food.cuisine}
    </li>
   
  ));
  const handleAddFood =()=>{  
    const  newFood = getNewSpicyFood()
    const newFoodarray = [...foods,newFood]
    setFoods(newFoodarray)
    console.log(newFoodarray)
  }
  const handleDelete = (id)=>{
    const newfoodList = foods.filter((food)=>food.id !== id)
    console.log(newfoodList)
    setFoods(newfoodList)
  }
  const handleUpdate = (id)=>{
       const newFoodArray = foods.map((food)=>{
         if (food.id === id){
           return {
             ...food,heatLevel:food.heatLevel+1,
           }
         }
         else{
           return food
         }
       });
       setFoods(newFoodArray);
  }
 
    
  

  return (
    <div>
      <button onClick={(e)=>handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select onChange ={handleOption} name="filter">
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
      </select> 
    </div>
  );

  }
export default SpicyFoodList;
