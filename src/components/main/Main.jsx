import React from 'react'
import MenuItem from './MenuItem';
import Salad from '../../assets/greeksalad.jpg';
import Bruch from '../../assets/bruchetta.jpg';
import Dessert from '../../assets/lemondessert.jpg';
import './main.css';

const Main = () => {
  return (
    <div className="container text-center">
      <h1 className="my-4">This Week's Specials!</h1>
      <button className="btn btn-warning mb-4">Online Menu</button>
      <div className="row">
        <MenuItem
          image={Salad}
          title="Greek Salad"
          price="12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          orderLink="#"
        />
        <MenuItem
          image={Bruch}
          title="Bruchetta"
          price="5.99"
          description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          orderLink="#"
        />
        <MenuItem
          image={Dessert}
          title="Lemon Dessert"
          price="5.00"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          orderLink="#"
        />
      </div>
    </div>

  )
}

export default Main
