import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path='/Contacts' element={<Contacts />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </main>
      <Footer/> 
    </div>
  )
}

export default App
