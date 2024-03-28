import React from 'react'

const Setting = () => {
  return (
    <div className="setting">
      <div className="left-side">
        <h1>Personal information</h1>
        <input type="firstname" text="name" placeholder="firstname"></input>
        <input type="email" text="email" placeholder="email"></input>
        <input type="adress" text="address" placeholder="address"></input>
      </div>
      <div className="right-side">
        <input type="lastname" text="lastname" placeholder="lastname"></input>
        <input type="phone" text="phone" placeholder="phone number"></input>
        <button>Save Changes</button>
      </div>
    </div>
  );
}

export default Setting
