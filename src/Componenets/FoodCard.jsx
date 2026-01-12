import React from 'react'
import './FoodCard.scss'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addtoCart } from '../slices/CartSlice';

const Foodcard = ({id, name, price, rating, img, desc, handleToast}) => {

  const dispatch = useDispatch();
  return (
    <div>
            <>
        <div className='container-fluid mt-4'>
        <div className="pizza-card">
      <img
        src={img}
        alt="Onion Pizza"
        className="img-fluid img-food"
      />
      <div className="mt-3">
        <div className="plus d-flex justify-content-between">
        <h3 className="title">{name}</h3>
        <span className="price">Rs{price}</span>
        </div>
        <p className="description">
         {desc}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="rating">
          <FaStar  className='str'/>
            4.5
          </div>
          <button
           onClick={()=> { dispatch(addtoCart({id, name, price, rating, img, qty: 1}));  handleToast(name);
          }} className="btn btn-cart">Add To Cart</button>
        </div>
      </div>
    </div>
    </div>
    </>
    </div>
  )
}

export default Foodcard
