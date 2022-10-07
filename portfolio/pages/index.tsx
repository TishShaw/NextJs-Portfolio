import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div className="w-full bg-black text-white snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 h-screen">
      <Head>
        <title>Tishtanya Shaw Portfolio</title>
      </Head>

      <Header/>
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Work/>
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      {/* Contact Me */}
    </div>
  )
}


export default Home
