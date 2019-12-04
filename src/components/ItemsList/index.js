import React, { useEffect } from 'react';
import Axios from 'axios';

// Reference: I learned about the effect hook in this website: https://reactjs.org/docs/hooks-effect.html.
// I had seen some people using it, but have never used it myself. Lines 7 to 12 use the useEffect, that
// handles the side effects (componentDidMount, componentDidUpdate) on function components.
export default function ItemsList({ email, items, setItems }) {
  useEffect(() => {
    Axios.get('/items')
      .then(result => {
        setItems(result.data);
      });
  }, [email, items]);

  return (
    <div className="dashboard">
      <h1>Items available for sale:</h1>
      <div className="items-container">{items.map((item, index) => {
        return <div className="item" key={index}>
          <h5 className="item-name">{item.name}</h5>
          <p className="item-category">Category: {item.category}</p>
          <p className="item-price">Price: {item.price}</p>
          <p className="item-contact">Contact info: {item.contact}</p>
        </div>
      })}
      </div>
    </div>
  )
}