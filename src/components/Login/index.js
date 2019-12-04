import React from 'react';
import Axios from 'axios';

export default function Login({ email, setEmail }) {
  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: { email }
    }

    Axios.post('/users', { user })
      .then(res => {
        const user_id = res.data._id;
        // browser database to store info, needed to pass the user_id to other components
        localStorage.setItem('user', user_id);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <p>Sell your used stuff and find great used products to buy</p>
      <p>Login or signup with your email bellow.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-MAIL
          <input type="text" name="email" id="email" placeholder="Enter your email here" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <button className="btn" type="submit">Enter</button>
      </form>
    </div>
  )
}