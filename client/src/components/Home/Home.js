import React from 'react'
import Background from '../Background'
import Footer from '../MainLayout/Footer'
import Navbar from '../MainLayout/Navbar'
import NoiseBackground from '../NoiseBackground'

const Home = () => {
  return (
    <NoiseBackground>
        <Background className={"dark:bg-transparent min-h-screen"}>
        <Navbar/>
        {/* <Footer/> */}
        </Background>
    </NoiseBackground>
  )
}

export default Home