import Image from 'next/image'
import Hero from './components/Hero'
import AltHero from './components/AltHero'
import AltProgram from './components/AltProgram'
import Program from './components/Program'
import Footer from './components/Footer'
import NavBar from './components/Navbar'

export default function Home() {
  return (
    <main className="w-screen h-full">
      
      <section id="main">
        {/* <Hero /> */}
        {/* <AltHero /> */}
        <AltProgram />
        
      
      </section>
    </main>
  )
}
