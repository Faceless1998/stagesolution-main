import React from 'react'
import Hero from './Hero'
import './home.css'
import Insideinfo from './Insideinfo'
import Insideplan from './Insideplan'
import Insideservice from './Insideservice'

const Home = () => {
  return (
	<>
	<Hero />
	<Insideservice />
	<Insideplan />
	<Insideinfo />
	
	</>
	
  )
}

export default Home