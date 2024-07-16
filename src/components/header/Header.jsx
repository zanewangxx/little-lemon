import React from 'react'
import "./header.css";
import header_img from "../../assets/restauranfood.jpg";
const Header = () => {
  return (
    <div className="container">
    <div className="hero-section row align-items-center">
      <div className="col-md-6 text-center text-md-start">
        <h1 style={{color: '#F4CE14'}}>Little Lemon</h1>
        <p>Chicago</p>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="col-md-6 text-center">
        <img src={header_img} alt="food" className="img-fluid img-height" />
      </div>
    </div>
  </div>
  )
}

export default Header
