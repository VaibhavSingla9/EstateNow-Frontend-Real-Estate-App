import React from 'react'

import Header from './Header'
import About from './About'
import Projects from './Projects'
import Testimonails from './Testimonails'
import Contact from './Contact'
import Footer from './Footer'


const Home = () =>(
    <div className='w-full overflow-hidden'>
    <Header/>
    <About/>
    <Projects></Projects>
    <Testimonails/>
    <Contact/>
    <Footer/>
    </div>
  )

  export default Home;