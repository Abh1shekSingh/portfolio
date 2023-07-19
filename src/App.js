import React from 'react';
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
function App() {
  return (
    <div className="App">
      <Navbar />
        
          <Routes>
            <Route path='/' exact element={<Hero />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
