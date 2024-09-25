import React from 'react'
import HeroSection from './HeroSection'
import ProductList from './ProductList'
import FreelancerSection from './FreelancerSection'
import Freelancerprofile from './FreelancerCard/FreelancerCard'

const Home = () => {
  return (
    <div>
     <HeroSection/>
     <ProductList/>
     <FreelancerSection/>
     <Freelancerprofile/>
    </div>
  )
}

export default Home