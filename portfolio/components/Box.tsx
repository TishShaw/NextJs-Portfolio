import * as THREE from 'three'
import React, { useRef } from 'react'
import { useTexture } from "@react-three/drei"
import { useFrame, ThreeElements } from '@react-three/fiber'
import img from '../public/map.jpg'

type Props = {}

const Box = (props:Props): JSX.Element => {
    const mesh = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => ( mesh.current.rotation.x = 100,  mesh.current.rotation.y = 100,  mesh.current.rotation.z += .03))

    const imgProps = useTexture({
        map: "./_next/static/media/map.fcec4c14.jpg"
    })

    return (
        <>
            <mesh
                {...props}
                ref={mesh}
                scale={2}>
                <torusGeometry args={[2, .2, 16, 100]}  />
                <pointLight position={[2, 3, 4]} />
                <meshStandardMaterial  {...imgProps} />
            </mesh>
        </>
    )
}

export default Box