import React from 'react'
import ServiceHeader from '../Component/Service/ServiceHeader'
import ServiceSection from '../Component/Service/ServiceSection'
import ServiceWhatsappCta from '../Component/Service/ServiceWhatsappCta'

const Service = () => {
  return (
    <section className=' mx-auto'>
      <ServiceHeader></ServiceHeader>
      <ServiceSection></ServiceSection>
      <ServiceWhatsappCta></ServiceWhatsappCta>

    </section>
  )
}

export default Service