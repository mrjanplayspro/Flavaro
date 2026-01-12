import React from 'react'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error';
import ProtectedRoute from "./Componenets/ProtectedRoute";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/success"
        element={<ProtectedRoute element={<Success />} />}
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  )
}
