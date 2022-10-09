import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {p1 } from '../public/images/plantHaven-desktop.png'
import p2 from '../public/images/keitaBeauty-desktop.png'
import p3 from '../public/images/desktop-recipeace.png'
type Props = {}

const Projects = (props: Props) => {
        console.log(p3)
    const projects =
[ 
    {
        id:1,
        name: "Recipeace",
        img: "/_next/static/media/desktop-recipeace.249325d0.png" ,
        desc:"A recipe-sharing app using ReactJS, ContextAPI for managing user state , Sanity.io as a headless CMS, and Tailwindcss for styling."
    },
    {
        id: 2,
        name: "Keita's Beauty",
        img: "/_next/static/media/keitaBeauty-desktop.7774fe49.png",
        desc: "A eccomerce website using ReactJS, Redux, Django RestFramework, Bootstrap and PostgresSQL."
    },
    {
        id:3,
        name: "Plant Haven",
        img: "/_next/static/media/plantHaven-desktop.db4dc3f7.png",
        desc: "House Plant Heaven is an app where you can find a variety of indoor plants. You can expand your knowledge about different varieties, choose plants based on your specific needs, find distributers, and like your favorite plants. This project was created using ReactJS, Node.js, Express, MongoDB, and deployed with Heroku and Netlify."
    },

]
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h1 className="absolute text-2xl text-gray-500 top-24 uppercase tracking-[20px]">Projects</h1>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mb-6 scrollbar-thin scrollbar-thumb-[#F7ABBA]">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-7 p-20 md:p-44 h-screen justify-center items-center" key={project.id}>
                        <motion.img 
                        initial={{ 
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true}}
                        src={project.img}
                        alt="project_img" />

                        <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl md:text-3xl semi-bold text-center"><span className="decoration-[#f7aaba]/50 underline">Case Study {i + 1} of {projects.length}</span>: {project.name}</h4>
                            <p className="text-lg text-center md:text-left">{project.desc}</p>
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