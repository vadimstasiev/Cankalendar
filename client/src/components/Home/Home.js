import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../Background'
import Footer from '../MainLayout/Footer'
import Navbar from '../MainLayout/Navbar'
import NoiseBackground from '../NoiseBackground'

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/Kanban')
  }, []);
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