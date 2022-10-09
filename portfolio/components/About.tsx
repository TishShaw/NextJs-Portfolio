import React from 'react'
import {motion} from 'framer-motion'
import img from '../public/images/avatar.png'
type Props = {}

const About = (props: Props) => {
    console.log(img)
    return (
        <div className="h-screen flex flex-col  relative text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x:0}}
                viewport={{ once: true}}
                src="/_next/static/media/avatar.d8869e50.png"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7ABBA]/50">little</span> background</h4>
                <p className="text-base md:w-[500px] lg:w-full">Hi there! my name is Tishtanya but my friends call me Tish. I'm a web developer from Columbia, Maryland. I have a passion for creating innovative and performant applications that help make businesses thrive. My favorite thing about being a web developer is find new problems and creating solutions to difficult problems.
                </p>
            </div>
        </div>
    )
}

export default About