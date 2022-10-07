import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const Work = (props: Props) => {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        className=" h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            
            <h3 className="absolute uppercase top-24 
            tracking-[20px] text-gray-500 text-2xl">Experience</h3>

            <div className="w-full flex space-x-5  overflow-hidden overflow-x-scroll p-10 snap-x snap-mandatory snap-center top-[500px]">
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>
        </motion.div>
    )
}

export default Work