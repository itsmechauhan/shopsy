import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { useState } from 'react';
function App() {
  const [token,setToken]=useState(localStorage.getItem("userToken") ??null)


  return (
    <div className="App">
      <Navbar token={token} setToken={setToken}/>
     {token ? <Products/> : <Login SetToken={setToken} token={token}/>}
      <Footer />


    </div>
  );
}

export default App;
