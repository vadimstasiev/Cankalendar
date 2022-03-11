import React from 'react'
import Background from '../Background'
import Navbar from '../Navbar/Navbar'
import NoiseBackground from '../NoiseBackground'

const Home = () => {
  return (
    <NoiseBackground>
        <Background className={"dark:bg-transparent min-h-screen"}>
        <Navbar/>
        </Background>
    </NoiseBackground>
  )
}

export default Home