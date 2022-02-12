import { useState, useEffect } from 'react'
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import Dog from '../../lib/Dog'
import Lights from "./Lights"

const Model3D = () => {

    const [view, setView] = useState([7, 6, 9])

    useEffect(() => {
        if (screen.width < 700) {
            setView([15, 6, 9])
        } else {
            setView([7, 6, 9])
        }
    }, [])

    return (
        <Canvas
            colorManagement
            shadowMap
            camera={{ position: view, fov: 40 }}
        >
            <Suspense fallback={null}>
                <Dog />
                <OrbitControls />
                <Lights />
            </Suspense>
        </Canvas>

    )
}
export default Model3D