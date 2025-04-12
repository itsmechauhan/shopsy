import React from 'react'
import '../App.css'
const Navbar = ({token,setToken}) => {

  const LogOutHandler = () =>{
    setToken("");
    localStorage.clear();
  }
  return (
    <div className='navbar'>
        
        <h1>Shopsy</h1>

{token && (

<button className='log-out-btn' onClick={() => LogOutHandler()}> Log Out</button>
  
)}
  


  


    </div>
  )
}

export default Navbar