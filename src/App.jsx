import React from 'react'

import Home from './components/Home';
import Signup from './components/Signup'; // ✅ Corrected spelling
import Login from './components/Login';   // ✅ Added missing import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

  import { ToastContainer } from 'react-toastify';

  

const App = () => {
  return (
    <Router>
    <ToastContainer/>
     <div className="min-h-screen bg-slate-50">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </Router>
  )
}

export default App
