import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    skill: Skill
}

const SkillCard = ({skill}: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
            initial={{
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0}}
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover h-20 w-20 p-4 md:w-24 md:h-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
        </div>
    )
}

export default SkillCard 