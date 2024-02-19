import React from 'react'
import Hero from '../Component/Home/Hero'

import Faq from '../Component/Home/Faq'
import Features from '../Component/Home/Features'
import Extra from '../Component/Home/Extra'
import Testimonial from '../Component/Home/Testimonial'
import Stats from '../Component/Home/Stats'
import BlogSection from '../Component/Home/Blog/BlogSection'


const Home = () => {
  return (
    <section className='font-rubik'>
      <Hero></Hero>
      {/* <Features></Features> */}
      <Extra></Extra>
      <BlogSection></BlogSection>
      <Stats></Stats>
      {/* <Testimonial></Testimonial> */}
      <Faq></Faq>
    </section>
  )
}

export default Home