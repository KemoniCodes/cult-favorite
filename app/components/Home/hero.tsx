'use client'
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion"
import ReactLenis from "@studio-freight/react-lenis";
// import { useGSAP } from "@gsap/react";
import Image from "next/image"
import Logo from '../../../public/PRIMARY.svg'
import DarkLogo from "../../../public/DARKPRIMARY.svg" 


gsap.registerPlugin(ScrollTrigger)


export default function Hero() {
    // const container = useRef();  
    // const tl = useRef();

    // useGSAP(() => {
    //   tl.current = gsap
    //     .timeline()
    //     .to(".tagLine", {
    //         y: 0
    //       })
    //     .to(".tagLine", {
    //       y: 5
    //     })
    //     .to(".logo", {
    //         y: 0
    //       })
    //     .to(".logo", {
    //       y: 50
    //     });
    // }, { scope: container });
    // useEffect(()=> {
    //     gsap.to(".tagLine", {
    //         scrollTrigger: ".tagLine", // start animation when ".box" enters the viewport
    //         y: 30,
    //       });
    // }, [])
    return (
        <>
            <div className="heroContainer h-screen">
                <motion.h1
                    initial={{ opacity: 0 }}
                    style={{ y: -20 }}
                    transition={{
                        ease: "easeIn",
                        duration: .15
                    }}
                    animate={{ y: 0, opacity: 1 }} className="tagLine uppercase text-[18px] text-tarantinoYellow text-center">🚧 UNDER CONSTRUCTION 🚧</motion.h1>
                <motion.div
                initial={{ opacity: 0 }}
                // style={{ y: 1400 }} 
                transition={{
                    ease: "linear",
                    duration: .3
                }}
                animate={{ y: 0, opacity: 1 }}
                >
                    <Logo className="logo lg:w-auto h-auto absolute bottom-0 pb-2 left-0 right-0 lg:mx-auto mx-[50.5px] w-[-webkit-fill-available]"/>
                    {/* <DarkLogo className="darkLogo w-auto h-auto absolute bottom-0 pb-2"/> */}
                    {/* <Image className="logo w-auto h-auto absolute bottom-0 pb-2" src={Logo} height={100} width={100} alt="CULT(FAVORITE) Logo" />
                    <Image className="darkLogo w-auto h-auto absolute bottom-0 pb-2 hidden" src={DarkLogo} height={100} width={100} alt="CULT(FAVORITE) Logo" /> */}
                </motion.div>

            </div>
        </>


    )
}