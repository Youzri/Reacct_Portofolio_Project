import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Projects from './pages/projects'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/Reacct_Portofolio_Project" element={<Home />} />
            <Route path="/Reacct_Portofolio_Project/about" element={<About />} />
            <Route path='/Reacct_Portofolio_Project/contacts' element={<Contacts />} />
            <Route path='/Reacct_Portofolio_Project/projects' element={<Projects />} />
          </Routes>
        </main>
      <Footer/> 
    </div>
  )
}

export default App
