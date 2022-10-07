import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        className="h-screen flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 md:min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute text-2xl text-gray-500 top-24 uppercase tracking-[20px]">Skills</h3>
            <h3 className="absolute top-[150px] uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficency</h3>
            <div className="grid grid-cols-4 gap-5">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </motion.div>
    )
}

export default Skills