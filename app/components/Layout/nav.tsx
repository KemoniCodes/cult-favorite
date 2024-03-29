import React, { use, useEffect, useState } from "react"
import Image from "next/image"
import YellowSmiley from '../../../public/yellowSmiley.svg'
import BlackSmiley from '../../../public/blackSmiley.svg'


export default function Nav() {
    const [colorChange, setColorChange] = useState(false)

    const handleClick = () => {
        setColorChange(!colorChange);
    };
    useEffect(() => {

        if (colorChange) {
            document.querySelector("html")?.classList.add("yellowMode");
            document.querySelector("html")?.classList?.add("black-star-cursor");
            document.querySelector("html")?.classList?.remove("yellow-star-cursor");
            document.querySelector(".darkLogo")?.classList.add("block");
            document.querySelector(".darkLogo")?.classList.remove("hidden");
            document.querySelector(".logo")?.classList.add("hidden");
            document.querySelectorAll("a,li")?.forEach((link) => {
                link?.classList.remove("transition-yellowLinkHover")
                link?.classList.remove("hover:text-tarantinoYellow")
                link?.classList.add("transition-darkLinkHover")
                link?.classList.add("hover:text-blancheWhite")
            })

        } else {
            document.querySelector("html")?.classList.remove("yellowMode");
            document.querySelector("html")?.classList?.remove("black-star-cursor");
            document.querySelector("html")?.classList?.add("yellow-star-cursor");
            document.querySelector(".darkLogo")?.classList.remove("block");
            document.querySelector(".darkLogo")?.classList.add("hidden");
            document.querySelector(".logo")?.classList.remove("hidden");
            document.querySelectorAll("a,li")?.forEach((link) => {
                link?.classList.remove("transition-darkLinkHover")
                link?.classList.remove("hover:text-blancheWhite")
                link?.classList.add("transition-yellowLinkHover")
                link?.classList.add("hover:text-tarantinoYellow")
            })
        }
    }, [colorChange]);
    return (
        <>
            <nav className="">
                <ul className="text-right z-10 relative flex justify-between items-start">
                    <button onClick={handleClick}>
                        {colorChange ? (
                            <BlackSmiley className="w-[58px] h-full ml-[100.5px]" />
                        ) : (
                            <YellowSmiley className="w-[58px] h-full ml-[100.5px]" />
                        )}
                    </button>

                    <div className="navInfo block">
                        <li>works</li>
                        <li>studio</li>
                        <li>contact</li>
                    </div>
                </ul>
            </nav>
        </>
    )
}			 	