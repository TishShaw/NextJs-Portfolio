import React from 'react'
import Img from 'next/image'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity'
import { Project } from '../typings'

type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h1 className="absolute text-2xl text-gray-500 top-24 uppercase tracking-[20px]">Projects</h1>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mb-6 scrollbar-thin scrollbar-thumb-[#F7ABBA]">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-7 p-20 md:p-44 h-screen justify-center items-center mt-10" key={project._id}>
                        <motion.img 
                        initial={{ 
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true}}
                        src={urlFor(project?.image).url()}
                        alt="project_img" 
                        className="w-80 h-60 md:h-[320px] md:w-[400px]"/>

                        <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl md:text-3xl semi-bold text-center"><span className="decoration-[#f7aaba]/50 underline">Case Study {i + 1} of {projects.length}</span>: {project.title}</h4>
                            <div className="flex items-center space-x-2 justify-center">
                                {
                                    project?.technologies.map((tech) => (
                                        <Img key={tech._id} src={urlFor(tech?.image).url()}
                                        width={45}
                                        height={45} alt="technologies"/>
                                    ))
                                }
                            </div>
                            <p className="text-lg text-center md:text-left">{project.summary}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#2c0f17] left-0 h-[400px] -skew-y-12">
            </div>
        </div>

    )
}

export default Projects