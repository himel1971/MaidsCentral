import React from 'react'
import ContactForm from '../Component/Contact/ContactForm'
import MapBox from '../Component/Contact/MapBox'
import LocationList from '../Component/Contact/LocationList'

const Contact = () => {
	return (
		<div className='font-rubik container mx-auto'>
			<MapBox></MapBox>
			{/* <LocationList></LocationList> */}
			<ContactForm></ContactForm>

		</div>
	)
}

export default Contact


