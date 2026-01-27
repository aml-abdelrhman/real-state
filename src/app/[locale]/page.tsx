import Hero from '../components/Hero';
import About from '../components/About';
import LatestProjects from '../components/LatestProjects';
import MapCard from '../components/MapCard';
import Achievements from '../components/Achievements';
import Partners from '../components/Partners';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <LatestProjects />
      <MapCard />
      <Achievements />
     <Partners/>
    </>
  );
}
