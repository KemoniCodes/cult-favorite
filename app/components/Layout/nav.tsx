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
            document.querySelector(".darkLogo")?.classList.add("block");
            document.querySelector(".darkLogo")?.classList.remove("hidden");
            document.querySelector(".logo")?.classList.add("hidden");
        } else {
            document.querySelector("html")?.classList.remove("yellowMode");
            document.querySelector(".darkLogo")?.classList.remove("block");
            document.querySelector(".darkLogo")?.classList.add("hidden");
            document.querySelector(".logo")?.classList.remove("hidden");
        }
    }, [colorChange]);
    return (
        <>
            <nav className="">
                <ul className="text-right z-10 relative flex justify-between">
                    <button onClick={handleClick}>
                        {colorChange ? (
                            <BlackSmiley className="w-[58px] h-full ml-[100.5px]" />
                        ) : (
                            <YellowSmiley className="w-[58px] h-full ml-[100.5px]" />
                        )}
                    </button>

                    <div className="navInfo block">
                        <li>studio</li>
                        <li>contact</li>
                    </div>
                </ul>
            </nav>
        </>
    )
}			 	