import React, {useState} from 'react'
import Img from 'next/image'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity'
import { Project } from '../typings'
import {BiLink} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'

type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
    const [viewMore, setMoreText] = useState(false)

    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left  max-w-full justify-evenly mx-auto items-center z-0">
            <h1 className="absolute text-2xl text-gray-500 top-24 uppercase tracking-[20px]">Projects</h1>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mb-6 scrollbar-thin scrollbar-thumb-[#F7ABBA]">
                {projects?.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-7 p-20 md:p-44 h-screen justify-center items-center mt-10 md:flex-row" key={project._id}>
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
                        className="w-70 h-70 shadow-sm md:h-[320px] md:w-[400px] mt-10"/>

                        <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl md:text-3xl semi-bold text-center"><span className="decoration-[#f7aaba]/50 underline">Case Study {i + 1} of {projects.length}</span>: {project.title}</h4>
                            <div className="flex items-center space-x-4 justify-center w-full md:justify-start md:ml-4">
                                {
                                    project?.technologies.map((tech) => (
                                        <Img key={tech._id} src={urlFor(tech?.image).url()}
                                        width={30}
                                        height={20} alt="technologies"
                                        />
                                    ))
                                }
                            </div>
                            <div className="text-lg text-center md:text-left w-[400px] px-4">
                            {!viewMore ? project?.summary.substring(0,65) + '...' :project?.summary}                               
                            {!viewMore?
                                <p className="underline cursor-pointer" onClick={() => setMoreText(!viewMore)}>view more</p> :
                                <p className="underline cursor-pointer" onClick={() => setMoreText(!viewMore)}>view less</p>
                            }
                        </div>
                            <div className="flex md:items-start items-center justify-center">
                                <span className="flex mr-10 items-center hover:text-[#F7ABBA]">
                                    <BiLink className="md:text-3xl text-2xl mr-2"/>
                                    <p className=" text-xl">
                                        <a href={project.github} rel="noreferrer" target="_blank">Souce Code</a>
                                    </p>
                                </span>
                                <span className="flex items-center hover:text-[#F7ABBA]">
                                    <AiFillGithub className="md:text-3xl mr-2 text-xl"/>
                                    <p className="text-xl">
                                        <a href={project.demo} rel="noreferrer" target="_blank">Demo</a>
                                    </p>
                                </span>
                            </div>
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