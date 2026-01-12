import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemsSm from "./ItemsSm";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./cart.scss";
import Fooditems from "./FoodItems";

const cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const closeCart = () => {
    setActiveCart(false);
  };
  const openCart = () => {
    setActiveCart(true);
  };
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div className={`side-cart cart-sat ${activeCart ? "active" : "hidden"}`}>
        <div className="textt d-flex justify-content-between">
          <p className="fw-bold di-order">My Orders</p>
          <IoMdClose onClick={closeCart} className="iconss mt-1" />
        </div>

        {cartItems.length > 0 ? cartItems.map((food) => {
          return (
            <ItemsSm
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        }) : <h4 className="d-flex justify-content-center fw-bold text-muted">Your Cart is Empty</h4>}

        {/* <ItemsSm /> */}

        <div className="items-conut">
          <p className="p-0 m-0 fw-bold">Total Items: {totalQty}</p>
          <p className="fw-bold">Total Price:{totalPrice}</p>
          <button  onClick={() => navigate("/success")} className="btn-cartt mb-3">Checkout</button>
        </div>
      </div>
      <FaShoppingCart
      onClick={() => setActiveCart(!activeCart)}
      className={`shopping-cart-btn ${totalQty > 0 ? "bounce" : ""}`}
    />

    </>
  );
};

export default cart;
