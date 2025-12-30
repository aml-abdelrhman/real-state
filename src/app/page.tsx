import type { NextPage } from 'next'
import Hero from './components/Hero'
import Partners from "./components/Partners"
import About from "./components/About"
import LatestProjects from "./components/LatestProjects"
import MapCard from "./components/MapCard"
import Achievements from "./components/Achievements"
import Footer from "./components/Footer"


import './styles/globals.css'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <LatestProjects />
      <MapCard />
      <Achievements />
      <Footer />

    </>
  )
}

export default Home
