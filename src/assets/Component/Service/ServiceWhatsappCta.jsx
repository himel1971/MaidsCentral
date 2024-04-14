import React from 'react'

const ServiceWhatsappCta = () => {
  return (
    <section className="py-6  text-gray-900">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">

		<h1 className="text-3xl uppercase font-rubik md:leading-3 text-center lg:text-left">
    Wanted to learn more? 

    <br /><br /> <br /> 
    <span className=' text-gray-600 text-xl italic'>Text us to learn more about our service.</span>

        </h1>
		<button className="px-8 py-3 text-lg font-semibold rounded bg-green-600 text-gray-50">
            <a href="https://wa.me/message/OTPYQ2VQURDEC1">Whatsapp</a>
        </button>
	</div>
</section>
  )
}

export default ServiceWhatsappCta