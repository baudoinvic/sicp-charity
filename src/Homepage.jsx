import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar  />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Homepage
