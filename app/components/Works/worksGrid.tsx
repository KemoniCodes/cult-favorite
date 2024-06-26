'use client'
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { WorksType } from "@/sanity/types";
import { getAllWorks } from "@/sanity/lib/query";
import Link from "next/link";

const WorksContext = React.createContext<WorksType | null>(null);

export default function WorksGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const [works, setWorks] = useState<WorksType | null>(null);

    useEffect(() => {
        const worksElement = document.querySelector("#works");

        if (worksElement) {
            if (isInView) {
                document.querySelector('.worksLink')?.classList.add('linkActive');
            } else {
                document.querySelector('.worksLink')?.classList.remove('linkActive');
            }
        }
    })


    useEffect(() => {
        const fetchWorks = async () => {
            const data = await getAllWorks();
            setWorks(data[0])
        };

        fetchWorks();
    }, [])

    return (
        <WorksContext.Provider value={works}>
            <div className="works grid grid-cols-7 gap-x-5 gap-y-4 mt-[16rem] pt-2 pb-16" id="works">
                <div className="titles block" ref={ref} style={{
                    transform: isInView ? "none" : "translateY(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <h3>{works?.worksHeader}</h3>
                    <h4>{works?.worksSubHeader}</h4>
                </div>
                <div className="list col-start-3 col-span-5 grid-cols-3 gap-x-5 gap-y-6 flex justify-between flex-wrap" ref={ref} style={{
                    transform: isInView ? "none" : "translateY(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    {works?.projects.map((project, index) => (
                        <>
                            <div className="flex flex-col first:flex-grow-[3]">
                                <Link href={project.slug.current}>
                                    <Image
                                        src={typeof project.thumbnail === "string"
                                            ? project.thumbnail
                                            : project.thumbnail.asset.url}
                                        height={373}
                                        width={362}
                                        alt={project.thumbnailAlt}
                                        className="h-fit w-full grayscale-[95%] hover:grayscale-0 hover:cursor-pointer 
                                  ease-in-out
                                duration-[240ms]	
                                hover:rounded-[4rem]

                                "
                                    />
                                    <h3 className="pt-[.28rem] ">
                                        {project.projectTitle}
                                    </h3>
                                    <div className="deliverables w-[60%] flex flex-wrap gap-1 mt-[.15rem]">
                                        {project?.deliverables?.map((deliverable, index) => (
                                            <h4 key={index} className="deliverable leading-[.8rem]">
                                                {deliverable}
                                            </h4>
                                        ))}
                                    </div>
                                </Link>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </WorksContext.Provider>
    )
}