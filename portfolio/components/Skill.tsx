import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    skill: Skill
    directionLeft: boolean
}

const SkillCard = ({skill, directionLeft}: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0}}
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover h-20 w-20 p-4 md:w-24 md:h-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 p-4 md:w-24 md:h-24 xl:h-32 xl:w-32 rounded-full z-0 ">
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl font-bold text-black opacity-100 flex justify-center items-center mx-auto text-center absolute">{skill.title}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard 