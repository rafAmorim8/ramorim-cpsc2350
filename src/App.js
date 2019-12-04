import React, { useState } from 'react';
import Login from './components/Login';
import ItemsList from './components/ItemsList';
import SellingList from './components/SellingList';

import './index.css';

// Reference: I have learned about updating the state
// with react hooks (using useState) on this link: https://hellocode.dev/updating-state
// and have used this login on my components. I have opted for that as it is easier
// and I had quite some problems binding(this) through states and "state change methods".
export default function App() {
  const [email, setEmail] = useState('');
  const [items, setItems] = useState([]);

  return (
    <>
      <div className="container">
        <a className="siteLogo" href="/">BuyAndSell</a>

        <div className="content">
          <Login email={email} setEmail={setEmail} />
          <ItemsList email={email} items={items} setItems={setItems} />
          <SellingList email={email} />
        </div>
      </div>
    </>
  )
}