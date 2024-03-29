'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { WorksType } from "@/sanity/types";
import { getAllWorks } from "@/sanity/lib/query";
// import { getWorksBySlug } from "@/sanity/lib/query";


const WorksContext = React.createContext<WorksType | null>(null);


export default function WorksGrid() {
    const [works, setWorks] = useState<WorksType | null>(null);

    useEffect(() => {
        const fetchWorks = async () => {
            const data = await getAllWorks();
            setWorks(data[0])
        };

        fetchWorks();
    }, [])

    // console.log(works);

    return (
        // relative top-[16rem]
        <WorksContext.Provider value={works}>
            <div className="works grid grid-cols-7 grid-rows-8 gap-x-5 gap-y-4 mt-8 pt-2">
                <div className="titles block">
                    <h3>{works?.worksHeader}</h3>
                    <h4>{works?.worksSubHeader}</h4>
                </div>
                <div className="list col-start-3 col-span-5 grid-cols-3 gap-x-5 gap-y-6 flex justify-between flex-wrap">
                    {works?.projects.map((project, index) => (
                        // console.log(project),
                        <>
                            <div className="flex flex-col first:flex-grow-[3]">
                                <Image
                                    src={`${project.thumbnail.asset.url}`}
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
                            </div>
                        </>
                        // col-span-3 row-span-3
                    ))}
                </div>
            </div>
        </WorksContext.Provider>
    )
}