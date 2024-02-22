import React from 'react'
import Hero from '../Component/Home/Hero'
import TopStories from '../Component/Home/TopStories'
import Tips from './Tips'
import Stats from '../Component/Home/Stats'
import OurAgency from '../Component/Home/OurAgency'
import Extra from '../Component/Home/Extra'
import BlogSection from '../Component/Home/Blog/BlogSection'
import Grid from '../Component/Home/Grid'
import HelperComponent from '../Component/Home/HelperComponent'

const Home2 = () => {
  return (
    <>
      {/* <Hero></Hero> */}
      <TopStories></TopStories>
      <Extra></Extra>
      {/* <BlogSection></BlogSection> */}
      <Tips></Tips>
      {/* <Grid></Grid> */}
      <Stats></Stats>
      <OurAgency></OurAgency>
      {/* <HelperComponent></HelperComponent> */}
    </>
  )
}

export default Home2