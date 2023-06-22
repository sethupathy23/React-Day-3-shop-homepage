import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import About from "./About";
import Shop from "./Shop";
import Navbar from './Navbar';
import { color } from '@mui/system';
import { Footer } from './Footer';
import { Card } from './Card';



function App() {
  const [count, setCount] = useState(0);
  

 return (
  <div>
    <div>
       <Navbar count={count} />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
       </Routes>
    </div>
      <div className='header1'>
       <h1 className='h1'>Shop in style</h1>
       <h2 className='h2'>with this shop homepage template</h2>
      </div>
      <Card count={count} setCount={setCount} />
      <Footer />
  
  </div>
  )
}

export default App


