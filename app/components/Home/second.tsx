"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "../Layout/nav";
import Image from "next/image";
import Gif1 from "../../../public/gif1.gif";
import Img1 from "../../../public/homeImg.png";

gsap.registerPlugin(ScrollTrigger);

const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export default function Second() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const nav = navRef.current!;
        const container = containerRef.current!;


        const toggleNavFixed = () => {
            if (window.scrollY > nav?.offsetTop) {
                nav?.classList.add("fixed-nav");
                nav?.classList.remove("hidden");

            } else {
                nav?.classList.remove("fixed-nav");
                nav?.classList.add("hidden");
            }
        };

        const toggleNavOpacity = () => {
            if (window.scrollY > nav?.offsetTop) {
                nav?.classList.add("opacity-100");
                nav?.classList.remove("opacity-0");
            } else {
                nav?.classList.remove("opacity-100");
                nav?.classList.add("opacity-0");
            }
        };

        const debouncedToggleNavFixed = debounce(toggleNavFixed, 100);
        const debouncedToggleNavOpacity = debounce(toggleNavOpacity, 100);

        window.addEventListener("scroll", debouncedToggleNavFixed);
        window.addEventListener("scroll", debouncedToggleNavOpacity);

        return () => {
            window.removeEventListener("scroll", debouncedToggleNavFixed);
            window.removeEventListener("scroll", debouncedToggleNavOpacity);
        };
    }, []);

    return (
        <div className="relative mt-8 pt-2 h-screen pb-2" ref={containerRef}>
            <div ref={navRef} className="mb-8 pb-2 transition-opacity duration-300 opacity-0 w-full">
                <Nav />
            </div>
            <div className="grid grid-cols-7 grid-rows-8 gap-x-5 gap-y-4 absolute bottom-0 left-0 h-screen">
                <div className="imgContainer col-span-3 row-start-2">
                    <Image className="w-full" src={Img1} height={353} width={561} alt="image 1" />
                    <h4 className="uppercase text-[11px] pt-[.1rem]">jouir de</h4>
                </div>
                <div className="gifContainer col-span-2 col-start-6 row-start-2">
                    <Image className="w-full" src={Gif1} height={520} width={368} alt="gif 1" />
                    <h4 className="uppercase text-[11px] pt-[.1rem] ">ceramica</h4>
                </div>

                <h2 className="uppercase text-[75px] leading-[73px] text-left col-span-4 row-end-7">
                    LOS ANGELES－BASED DESIGNER & CREATIVE DEVELOPER.
                </h2>
            </div>
        </div>
    );
}
