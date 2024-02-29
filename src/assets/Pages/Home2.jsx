import React from 'react'
import TopStories from '../Component/Home/TopStories'
import Tips from './Tips'
import Stats from '../Component/Home/Stats'
import OurAgency from '../Component/Home/OurAgency'
import TipsSection from '../Component/Home/Blog/TipsSection'
import OurMission from '../Component/Home/OurMission'

const Home2 = () => {
  return (
    <>
      
      <TopStories></TopStories>
      {/* <TipsSection></TipsSection> */}
      <Stats></Stats>
      <Tips></Tips>
      <OurMission></OurMission>
      <OurAgency></OurAgency>
    
    </>
  )
}

export default Home2