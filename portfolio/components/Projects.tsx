import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import p1 from '../public/p1.png'
type Props = {}

const Projects = (props: Props) => {
    const projects = ["Recipeace", "Keita's Beauty", "Plant Haven"]
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h1 className="absolute text-2xl text-gray-500 top-24 uppercase tracking-[20px]">Projects</h1>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-6">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-7 p-20 md:p-44 h-screen justify-center items-center" key={i}>
                        <motion.img 
                        initial={{ 
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true}}
                        src="https://user-images.githubusercontent.com/92543814/155241034-f3d8b321-7d5c-432d-825f-95ebd57eddf1.png"
                        alt="project_img" />

                        <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl md:text-3xl semi-bold text-center"><span className="underline u ">Case Study {i + 1} of {projects.length}</span>: {project}</h4>
                            <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum iusto impedit! </p>
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