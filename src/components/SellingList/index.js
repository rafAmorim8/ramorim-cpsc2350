import React, { useState } from 'react';
import Axios from 'axios';

// Reference: I have learned about updating the state
// with react hooks (using useState) on this link: https://hellocode.dev/updating-state
// and have used this login on my components. I have opted for that as it is easier
// and I had quite some problems binding(this) through states and "state change methods".
// Additionally, I learned to pass the state and setState to child components throug the props.
export default function SellingList({ email, items, setItems }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [contact, setContact] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: { name },
      contact: { contact },
      category: { category },
      price: { price },
      user: { email }
    }


    Axios.post('/items', { item, email })
      .then(res => {
        // setItems(item);
        return;
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="user-area">
      <h1>User Area</h1>
      <p>User logged in: {email}</p>
      <div className="addItem">
        <h3>Add an item to sell.</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="product">
            Product Name:
          <input type="text" name="name" id="name" value={name} onChange={event => setName(event.target.value)} />
          </label>
          <label htmlFor="category">
            Category:
          <input type="text" name="category" id="category" value={category} onChange={event => setCategory(event.target.value)} />
          </label>
          <label htmlFor="price">
            Price:
          <input type="number" name="price" id="price" value={price} onChange={event => setPrice(event.target.value)} />
          </label>
          <label htmlFor="contact">
            Contact:
          <input type="text" name="contact" id="contact" value={contact} onChange={event => setContact(event.target.value)} />
          </label>
          <button className="btn" type="submit">Sell Item</button>
        </form>
      </div>
    </div>
  )
}