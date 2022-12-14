import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
import { Social } from '../typings'


type Props = {
    darkMode: Boolean
    setDarkMode: (isDark: boolean) => void
    socials: Social[]
}

function Header({darkMode, setDarkMode, socials}: Props) {
    return (
        <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center">
            <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center">
                {/* Social Icons */}
                {
                    socials.map((social) => (
                        <SocialIcon 
                            key={social._id}
                            url={social.url}
                            fgColor="white"
                            bgColor="transparent"
                        />
                    ))
                }
                <a href="mailto:Tishtanya.shaw24@gmail.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                </a>
            </motion.div>
            <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center text-gray-300 cursor pointer">

                {
                    !darkMode ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mr-6 cursor-pointer text-white" onClick={() => setDarkMode(!darkMode)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mr-6 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>

                }

                <button className={` px-6 py-2 uppercase hidden md:inline-flex text-sm md:text-md hover:text-[#F7ABBA] ${darkMode ? 'border border-white rounded-lg text-white' : 'bg-white text-gray-400 rounded-lg '}`}><a href="https://tishtanya-shaw.netlify.app/static/media/Tishtanya-Shaw-resume.docx.d848118d8ad479668b26.pdf" target="
                _blank">Resume</a></button>
            </motion.div>
        </header>
    )
}

export default Header