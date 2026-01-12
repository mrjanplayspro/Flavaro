import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../slices/CategorySlice";
import "./Catagery.scss"

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="category-menu">
      <h3 className="fs-4 fw-semibold">Find the best food</h3>
      <div className="category-buttons">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`btn category-btn ${selectedCategory === "All" ? "active" : ""}`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`btn category-btn ${selectedCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
