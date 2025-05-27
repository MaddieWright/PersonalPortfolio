import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} /> 
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
    </>
  )
}

export default App
