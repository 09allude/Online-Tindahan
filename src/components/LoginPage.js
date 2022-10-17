import React, { useState } from 'react';
import "../components/LoginPage.css";

import Logo from "../assets/grad_pic_3.png";



const LoginPage = () => {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [ user, setUser ] = useState({ name:"", email:"" });
  const [ error, setError ] = useState("");

  const [ details, setDetails ] = useState({ name:"", email:"", password:"" });
  const submitHandler = e => {
    e.preventDefault();
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in!")
        setUser({
          name: details.name,
          email: details.email
        })
    } else {
      console.log("Details do not match!")
    }
  }


  return (
    <div className="LogIn_Mainframe">
      
      <div className="Login_Form">
        <img src={Logo} className="Logo" alt="logo" />
        <div className="Login_Form_Data">
          <h1>LOG IN</h1>
          <form className="form_CN" onSubmit={submitHandler}>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Username"
              onChange={ e => setDetails({ ...details, name: e.target.value }) }
              value={details.name}
            />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={ e=> setDetails({ ...details, email: e.target.value }) }
              value={details.email}
            />
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Password"
              onChange={ e=> setDetails({ ...details, password: e.target.value }) }
              value={details.password}
            />
            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage