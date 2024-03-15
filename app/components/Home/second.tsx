import React from "react";
import Nav from "../Layout/nav";
import Image from "next/image";
import Gif1 from "../../../public/gif1.gif";
import Img1 from "../../../public/homeImg.png";

export default function Second() {
    return (
        <div className="relative h-screen mt-8 pt-2 pb-2">
            <Nav />
            <div className="grid grid-cols-7 grid-rows-8 gap-x-5 gap-y-4 absolute bottom-0 left-0 h-screen">
                <div className="imgContainer col-span-3 row-start-2">
                    <Image className="w-full" src={Img1} height={353} width={561} alt="image 1" />
                    <h4 className="uppercase text-[11px] text-blancheWhite">jouir de</h4>
                </div>
                <div className="gifContainer col-span-2 col-start-6 row-start-2">
                    <Image className="w-full" src={Gif1} height={520} width={368} alt="gif 1" />
                    <h4 className="uppercase text-[11px] text-blancheWhite ">ceramica</h4>
                </div>

                <h2 className="uppercase text-[75px] leading-[73px] text-blancheWhite text-left col-span-4 row-end-7">
                    LOS ANGELES－BASED  DESIGNER & CREATIVE DEVELOPER.
                </h2>
            </div>
        </div>
    );
}
