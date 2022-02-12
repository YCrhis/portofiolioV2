import { useEffect } from 'react'
import Model3D from '../components/Models/Model3d'
import { gsap } from 'gsap'

export default function Home() {

  const timeline = gsap.timeline({ defaults: { ease: "slow" } });

  useEffect(() => {
    timeline.fromTo('.greeting', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 })
      .fromTo('.presentation', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }, '-=.5')
      .fromTo('.model', { opacity: 0 }, { opacity: 1, duration: 1.5 }, '-=.1')
  }, [timeline])

  return (
    <div className="w-full h-screen grid xl:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-4 p-5 relative">
      <div className="w-full text-center">
        <h1 className="greeting text-8xl text-left font-bold sm:mt-4 sm:text-center">Hello,</h1>
        <h1 className="presentation text-2xl font-semibold">I'm Yeridi Crhis Software Developer</h1>
      </div>
      <div className="model w-full xl:h-[75%] sm:h-[80%]">
        <Model3D />
      </div>
    </div>
  )
}
