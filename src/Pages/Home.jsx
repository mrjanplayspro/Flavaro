import React from 'react';
import Navbar from '../Componenets/Navbar';
import Catagery from '../Componenets/Catagery';
import "./Home.scss"
import Fooditems from '../Componenets/Fooditems';
import Cart from '../Componenets/cart';

const Home = () => {
  return (
    <>
  <Navbar />
  <Catagery />
  <Fooditems />
  <Cart />
  </>
  )
}

export default Home

