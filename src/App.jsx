import React from 'react';
import { BrowserRouter ,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Vans from './pages/Vans';
import Home from './pages/Home';
import About from './pages/About';
import './server'



export default function App() {
  return (
  <BrowserRouter>
      <header>
        <Link className='site-logo' to="/">#VANLIFE</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />

      </Routes>

    </BrowserRouter>
    
  
  );
}




 
 