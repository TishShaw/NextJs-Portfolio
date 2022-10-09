import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-red-100'} w-full text-white snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 h-screen scrollbar-track-[#F7ABBA]/50 ${darkMode &&' scrollbar-track-gray-400/10 scrollbar-thumb-black scrollbar-thin'} scrollbar-thin scrollbar-thumb-[#F7ABBA]`}>
      <Head>
        <title>Tishtanya Shaw Portfolio</title>
      </Head>

      <div>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <section id="hero" className="snap-start">
          <Hero/>
        </section>
        <section id="about" className="snap-center">
          <About/>
        </section>
        <section id="skills" className="snap-start">
          <Skills/>
        </section>
        <section id="projects" className="snap-start">
          <Projects/>
        </section>
        <section id="contact" className="snap-start">
          <Contact/>
        </section>
      </div>
    </div>
  )
}


export default Home
