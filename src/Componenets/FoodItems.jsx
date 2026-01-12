import React from 'react'
import FoodData from  '../Data/FoodData.js'
import FoodCard from "../Componenets/Foodcard";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";


const Fooditems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} `);
  return (
    <>
    <Toaster />
    <div className='d-flex flex-wrap justify-content-center'>
    {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
  </div>
  </>
  )
}

export default Fooditems
