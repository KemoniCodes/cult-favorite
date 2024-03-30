"use client"
import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation';
import { WorksType } from "@/sanity/types"
import { getWorkBySlug } from "@/sanity/lib/query"
import Image from "next/image"
import Nav from "../components/Layout/nav";


export default function ProjectPage() {
    const router = usePathname();
    const slug  = router.replace(/^\/|\/$/g, ''); // Assuming the slug is provided as a query parameter
    // console.log(slug)

    const [project, setProject] = useState<WorksType | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            console.log("Slug:", slug);
            if (slug) {
                const data = await getWorkBySlug(slug);
                console.log("Fetched Data:", data); 
                setProject(data[0]);
            }
        };
        fetchProject();
    }, [slug]);
    console.log(project)

    return (

        <>
        <Nav/>
            <div className="projectPageContainer">
            <div className="project grid grid-cols-7 grid-rows-8 gap-x-5 gap-y-4 mt-8 pt-2 relative top-[16rem]">
                    <div className="titles block">
                        <h3>{project?.projects[0].projectTitle}</h3>
                        <h4>{project?.projects[0].projectYear}</h4>
                    </div>
                    <div className="list col-start-3 col-span-4">
                        <ul className="flex justify-between">
                          
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}