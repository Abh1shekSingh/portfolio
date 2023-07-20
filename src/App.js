import React, {lazy} from 'react';
import './App.css'
import { Routes, Route} from 'react-router-dom'


const Navbar = lazy(() => import('./components/Navbar/Navbar')) ;
const Hero = lazy(() => import('./pages/Hero/Hero')) ;
const Footer = lazy(() => import('./components/Footer/Footer')) 
const About = lazy(() => import('./pages/About/About')) 
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
