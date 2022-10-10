import React from 'react'
import SkillCard from './Skill'
import { Skill } from '../typings'

type Props = {
    skills: Skill[]
}

const Skills = ({skills}: Props) => {
    return (
        <div
        className="h-screen flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 md:min-h-screen justify-center xl:space-y-0 mx-auto items-center ">
            <h3 className="absolute text-2xl text-gray-500 top-24 uppercase tracking-[20px]">Skills</h3>
            <h3 className="absolute top-[150px] uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for skill details</h3>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 md:p-4 mt-40 md:mt-50 lg:mt-24 xl:pt-40">
                {
                    skills?.slice(0, skills.length /2).map((skill) => (
                        <SkillCard key={skill._id} skill={skill} directionLeft={false}/>
                    ))
                }
                {
                    skills?.slice(skills.length / 2, skills.length).map((skill) => (
                        <SkillCard key={skill._id} skill={skill} directionLeft/>
                    ))
                }

            </div>
        </div>
    )
}

export default Skills