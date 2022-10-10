import React from 'react'
import Typewriter from 'typewriter-effect';
import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";
import Box from "./Box";
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className={css.scene}>
            <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
                <div className="top-50 text-white absolute z-10">
                    <div className="">
                        <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[15px]">Software engineer</h2>
                    </div>
                    <span className="text-5xl font-semibold lg:text-6xl pb-2 px-10">
                        <Typewriter
                            options={{
                                strings: [
                                    "Hi, my name is Tishtanya Shaw",
                                    "I am a web developer",
                                    "Let's work together :)!",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 70,
                            }}
                            />
                    </span>
                    <div className="">
                        <Link href="#about"><button className="heroBtn">About</button></Link>
                        <Link href="#skills"><button className="heroBtn">Skills</button></Link>
                        <Link href="#projects"><button className="heroBtn">Projects</button></Link>
                    </div>
                </div>
                    <Canvas
                        shadows={true}
                        className={css.canvas}
                        camera={{
                        position: [-6, 7, 7],
                        }}
                    >
                        <ambientLight />
                        {/* <Box  /> */}
                    </Canvas>
            </div>
        </div>
    )
}

export default Hero