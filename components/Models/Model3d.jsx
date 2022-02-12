import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import Dog from '../../lib/Dog'
import Lights from "./Lights"

const Model3D = () => {
    return (
        <Canvas
            colorManagement
            shadowMap
            camera={{ position: [7, 6, 9], fov: 40 }}
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