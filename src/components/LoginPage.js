import React, { useState } from 'react';
import "../components/LoginPage.css";

import Logo from "../assets/grad_pic_3.jpg";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
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
        });
      
      navigate("/dashboard");
    } else {
      console.log("Details do not match!")
      setError("Details do not match!!")
    }
  }


  return (
    <div className="LogIn_Mainframe">
      
      <div className="flex items-center justify-around p-6">
        <div>
          <h1>ONLINE TINDAHAN</h1>
        </div>
        <div className="pl-xxl">
          <h2>Need Help?</h2>
        </div>
      </div>

      <div className="flex justify-center items-center bg-LogIn_Frame pt-20 pr-72 border-solid border-2 border-red-600">
        <img src={Logo} className="Logo" alt="logo" />
        <div className="Login_Form_Data">

          {/* { details.email !== adminUser.email && details.password !== adminUser.password (<>
            <div>{ error }</div>
          </>) } */}

          <div className="p-5 rounded-md animate-bounce underline underline-offset-8">{ error }</div>

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
            <button className="bg-emerald-400 hover:bg-emerald-500 rounded-md p-2">Log In</button>
            
            <Link>Forgot Password?</Link>
          
          </form>
        </div>
      </div>



    </div>
  )
}

export default LoginPage