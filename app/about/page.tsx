"use client"
import React, { useEffect, useState } from "react";
import Nav from "../components/Layout/nav";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AboutType } from "@/sanity/types";
import { getAboutData } from "@/sanity/lib/query";

const AboutContext = React.createContext<AboutType | null>(null);

export default function StudioPage() {
    const router = usePathname();
    const [aboutData, setAboutData] = useState<AboutType | null>(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            const data = await getAboutData();
            setAboutData(data[0])
        };
        fetchAboutData();
    }, [])

    console.log(aboutData);

    useEffect(() => {
        if (router) {
            document.querySelector('.studioLink')?.classList.add('linkActive')
        }
    }, [router])

    return (
        <>
            <div className="studioPageContainer pb-16">
                <div className="fixed z-50 top-0 lg:px-[50.5px] px-[25.5px] right-0 left-0 block lg:w-auto w-screen" >
                    <Nav />
                </div>

                <motion.div className="grid grid-cols-7 grid-rows-4 gap-x-5 gap-y-4 pt-2 relative mt-[11rem]"
                    initial={{ opacity: 0 }}
                    // style={{ y: 1400 }} 
                    transition={{
                        ease: "linear",
                        duration: .3
                    }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <div className="titles block row-start-1">
                        {aboutData?.aboutHeader && <h3>{aboutData.aboutHeader}</h3>}
                        {/* {work?.projectYear && <h4>{work.projectYear}</h4>} */}
                    </div>
                    <div className="info row-start-1 lg:col-start-3 col-start-4 col-span-4 mb-8">
                        {aboutData?.aboutText && <h3 className="whitespace-pre-wrap">{aboutData.aboutText}</h3>}
                    </div>
                    <div className="titles block row-start-2">
                        {aboutData?.selectedClientsHeader && <h3>{aboutData.selectedClientsHeader}</h3>}
                    </div>
                    <div className="info row-start-2 lg:col-start-3 col-start-4 col-span-4 flex justify-between">
                        <ul className="">
                            {aboutData?.selectedClients && aboutData.selectedClients.map((client, index) => <li className="h3" key={index}>{client}</li>)}
                        </ul>
                    </div>
                    <div className="titles block row-start-3 lg:-mt-[9rem] -mt-[55rem]">
                        {aboutData?.techStackHeader && <h3>{aboutData.techStackHeader}</h3>}
                    </div>
                    <div className="info row-start-3 lg:-mt-[9rem]
                    -mt-[55rem] lg:col-start-3 col-start-4 col-span-4 flex justify-between">
                        <ul className="">
                            {aboutData?.techStack && aboutData.techStack.map((tech, index) => <li className="h3" key={index}>{tech}</li>)}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </>
    )
}