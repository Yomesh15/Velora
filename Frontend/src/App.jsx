import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Footer from "./component/Footer"
import { ToastContainer } from "react-toastify";
import Register from './pages/Register'
import Login from './pages/Login'
import Services from './pages/Services'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Dashboard from './Admin/Dashboard'
import AddProduct from './Admin/AddProduct'
import ProceedtoCheckout from './pages/ProceedtoCheckout'
import Settings from './pages/Settings'
import Orders from './pages/Orders'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/settings" element={<Settings />} />


        <Route path="/collections/:id" element={<Product />} />
        <Route path="/proceedtocheckout" element={<ProceedtoCheckout />} />
        <Route path="/orders" element={<Orders />} />


        {/* admin  */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />



        
      </Routes>

      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App