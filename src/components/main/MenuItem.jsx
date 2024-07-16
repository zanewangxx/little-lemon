import React from 'react';

const MenuItem = ({ image, title, price, description, orderLink }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img style={{height: "20rem"}}src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title} <span style={{ float: 'right', color: 'red' }}>${price}</span></h5>
          <p className="card-text">{description}</p>
          <a href={orderLink} className="btn btn-primary">Order a delivery</a>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
