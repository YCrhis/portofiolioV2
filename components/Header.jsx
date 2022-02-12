import { gsap, TimelineMax } from "gsap"
import { useEffect, useState } from "react"

const Header = () => {

    const timeline = gsap.timeline();

    const tl = gsap.timeline({ paused: true, reversed: true })

    const handleOpen = () => {
        tl.to('.options', { y: 0, opacity: 1 })
        tl.reversed() ? tl.play() : tl.reverse();
        console.log('funciona')
    }


    useEffect(() => {
        timeline.fromTo('.title', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
            .fromTo('.menu', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, '-=5')
    }, [timeline])


    return (
        <>
            <div className="fixed w-[100%] p-4 left-0 top-0 z-50">
                <div className="w-[90%] m-auto flex items-center justify-between">
                    <div className="">
                        <h1 className="title text-2xl font-bold">HOLIDAY</h1>
                    </div>
                    <div className="menu cursor-pointer hover:bg-gray-200 p-4 transition-all">
                        <i className="fa-solid fa-ellipsis-vertical" onClick={() => handleOpen()}></i>
                    </div>
                </div>
            </div>
            <div className="options fixed w-[100%] h-[20vh] bg-white left-0 bottom-0 top-20 p-5 z-40 opacity-0">
                <h2 className="text-center text-2xl font-bold mb-5">OPTIONS</h2>
                <ul className="flex justify-center">
                    <li className="each p-3 hover:bg-gray-200 text-xl transition-all cursor-pointer"><i className="fa-solid fa-house"></i> Home</li>
                    <li className="each p-3 hover:bg-gray-200 text-xl transition-all cursor-pointer"><i className="fa-solid fa-user"></i> About</li>
                    <li className="each p-3 hover:bg-gray-200 text-xl transition-all cursor-pointer"><i className="fa-solid fa-briefcase"></i> Works</li>
                </ul>
            </div>
        </>
    )
}
export default Header