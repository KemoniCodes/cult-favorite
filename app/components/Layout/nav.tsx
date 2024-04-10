import React, { useEffect, useState } from "react"
import Image from "next/image"
import YellowSmiley from '../../../public/yellowSmiley.svg'
import BlackSmiley from '../../../public/blackSmiley.svg'
import BlackSubmark from '../../../public/blackSubmark.svg'
import YellowSubmark from '../../../public/yellowSubmark.svg'
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Nav() {
    const [colorChange, setColorChange] = useState(false);
    const router = usePathname();
    const [showLink, setShowLink] = useState(true);

    useEffect(() => {
        if (router === '/') {
            setShowLink(false);
        } else {
            setShowLink(true);
        }
    }, [router]);

    const handleScrollToWorks = () => {
        const worksElement = document.querySelector("#works");
        if (worksElement) {

            worksElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

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
            // document.querySelector(".logo")?.classList.add("hidden");
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
            <nav className="mt-4">
                <ul className="text-right z-10 relative flex justify-between items-start">
                    <button onClick={handleClick}>
                        {colorChange ? (
                            <BlackSmiley className="w-[58px] h-full " />
                        ) : (
                            <YellowSmiley className="w-[58px] h-full " />
                        )}
                    </button>

                    <div className="logo">
                        {colorChange ? (
                            <Link href={'/'}>
                                <BlackSubmark />
                            </Link>

                        ) : (
                            <Link href={'/'}>
                                <YellowSubmark />
                            </Link>
                        )}
                    </div>

                    <div className="navInfo block">
                        <button onClick={handleScrollToWorks}>
                            {showLink ? (
                                <Link href={'/#works'} className="">
                                    <li className="worksLink">
                                        works
                                    </li>
                                </Link>
                            ) : (
                                <li className="worksLink">
                                    works
                                </li>
                            )}
                        </button>
                        <li>studio</li>
                        <li>contact</li>
                    </div>
                </ul>
            </nav>
        </>
    )
}			 	