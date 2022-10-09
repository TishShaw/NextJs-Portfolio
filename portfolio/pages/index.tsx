import type { GetStaticProps, NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { Portfolio, Project, Skill, Social } from '../typings'
import { fetchPortfolio } from '../utils/fetchPortfolio'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocial'
import { fetchProjects } from '../utils/fetchProjects'

type Props = {
  portfolio: Portfolio
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home = ({portfolio, skills, projects, socials}: Props) => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-red-100'} w-full text-white snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 h-screen scrollbar-track-[#F7ABBA]/50 ${darkMode &&' scrollbar-track-gray-400/10 scrollbar-thumb-black scrollbar-thin'} scrollbar-thin scrollbar-thumb-[#F7ABBA]`}>
      <Head>
        <title>Tishtanya Shaw Portfolio</title>
      </Head>

      <div>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} socials={socials}/>
        <section id="hero" className="snap-start">
          <Hero/>
        </section>
        <section id="about" className="snap-center">
          <About portfolio={portfolio}/>
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills}/>
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects}/>
        </section>
        <section id="contact" className="snap-start">
          <Contact portfolio={portfolio}/>
        </section>
      </div>
    </div>
  )
}


export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const portfolio: Portfolio = await fetchPortfolio()
  const projects: Project[] = await fetchProjects()
  const skills: Skill[] = await fetchSkills()
  const socials: Social[] = await fetchSocial()

  return {
    props: {portfolio, skills, projects, socials},
  }
}