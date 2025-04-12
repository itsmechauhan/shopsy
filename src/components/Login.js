import axios from 'axios';
import React, { useState } from 'react'
import "../App.css";
const Login = ({token,setToken}) => {
  const [userName,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  
  const loginHandler = () => {
    if (!userName || !password) {
      setError("Username and password are required.");
      return;
    }
  
    setError("");
  
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        if (res && res.data && res.data.token) {
          console.log("Token:", res.data.token);
          setToken(res.data.token);
          localStorage.setItem("userToken", res.data.token);
          setUsername("");
          setPassword("");
        } else {
          setError("Unexpected response from server.");
        }
      })
      .catch((err) => {
        console.log("Full error:", err);
  
        if (err.response) {
          console.log("Error response:", err.response);
          setError(err.response.data?.message || "Login failed, please try again.");
        } else if (err.request) {
          console.log("No response received:", err.request);
          setError("No response from server. Please check your internet connection.");
        } else {
          console.log("Error setting up request:", err.message);
          setError("An unexpected error occurred. Please try again.");
        }
      });
  };
  





  return(

   <div className="login">
  
<div className='login-inputs'>

<input 
value={userName} 
onChange={(e) =>setUsername(e.target.value)}
 type="text" placeholder="Username" />

<input value={password} 
onChange={(e) =>setPassword(e.target.value)}
 type="password" placeholder="Password"/>


{error && <small>{error}</small>}
  <button onClick={loginHandler}>Login</button>
  </div>
  
  
    </div>
  )
};

export default Login