import React, { useEffect } from "react"
import Image from "next/image"
import Logo from '../../../public/PRIMARY.svg'

export default function Hero() {
    return (
        <>
            <div className="heroContainer h-screen">
                <h1 className="uppercase text-[18px] text-tarantinoYellow text-center">AN INDEPENDENT DESIGN  STUDIO FOR AUTHENTIC  BRANDS LIVING IN THE CHAOTIC GOOD.</h1>
                <Image className=" w-auto h-auto absolute bottom-0 pb-2" src={Logo} height={100} width={100} alt="CULT(FAVORITE) Logo" />
            </div>
        </>

    )
}