import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/Signup'

const App = () => {
  return (
    <Router>
      <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Routes>
        <Route
        path='/'
        element={
          <>
      <Header />
      <About />
      <Projects/>
      <Testimonials />
      <Contact />
      <Footer />
      </>
        }
        />
        <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
    </div>
    </Router>
    
  )
}

export default App
