import React from 'react'
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import './itemsSm.scss'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/CartSlice';
import { incrementQty } from '../slices/CartSlice';
import { decrementQty } from '../slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';


  const ItemsSm = ({id, name, price, img, qty}) => {


    const dispatch = useDispatch ();
  return (
<>
<div className='d-flex gap-2 shadow-sm rounded p-2 mb-4'>
    <FaTrash       onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}className='trash'/>
    <img src={img} height={50} width={50} alt="" />
    <div>
        <h6 className='fw-bold text-muted'>{name}</h6>
        <div className='d-flex'>
            <span className='text-succes fw-bold'>Rs{price}</span>
            <div className="icons trash">
                <FiMinus   onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              } className='icon me-2'/>
                <span className='me-2'>{qty}</span>
                < GoPlus     onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              } className='icon'/>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default ItemsSm;

