"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { WorksType } from "@/sanity/types";
import { getWorkBySlug } from "@/sanity/lib/query";
import Nav from "../components/Layout/nav";
import { redirect } from 'next/navigation'


export default function ProjectPage() {
    const router = usePathname();
    const slug = router.replace(/^\/|\/$/g, '');

    const [project, setProject] = useState<WorksType | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (slug) {
                const data = await getWorkBySlug(slug);
                setProject(data[0]);
            }
        };
        fetchProject();
    }, [slug, project]);

    if (!project) {
        return (
            <h3>Loading...</h3>
        )
    }

    const work = project?.projects[0];

    if (slug != work?.slug.current) {
        return (
            redirect('/404')
        )
    }

    return (
        <>
            {project && (
                <div className="projectPageContainer pb-16 relative lg:top-auto top-48">
                    <div className="fixed z-50 top-0 lg:px-[50.5px] px-[25.5px] right-0 left-0 block lg:w-auto w-screen" >
                        <Nav />
                    </div>

                    <motion.div className="project block lg:grid grid-cols-7 grid-rows-4 gap-x-5 gap-y-4 pt-2 relative"
                        initial={{ opacity: 0 }}
                        // style={{ y: 1400 }} 
                        transition={{
                            ease: "linear",
                            duration: .3
                        }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <div className="titles block row-start-2 lg:mb-8 mb-4">
                            {work?.projectTitle && <h3>{work.projectTitle}</h3>}
                            {work?.projectYear && <h4>{work.projectYear}</h4>}
                        </div>
                        <div className="info row-start-2 lg:col-start-3 col-start-4 col-span-4 lg:mb-8 mb-12">
                            {work?.projectDescription && <h3>{work.projectDescription}</h3>}
                        </div>
                        {work && work.animationTech != null && work.backendTech != null && work.frontendTech != null && (
                            <>
                                <div className="titles block row-start-3 lg:mb-0 mb-2">
                                    {project?.techTitle && <h3>{project.techTitle}</h3>}
                                </div>
                                <div className="info row-start-3 lg:col-start-3 
                                col-start-4 col-span-4 flex lg:flex-row flex-col lg:justify-between justify-start lg:gap-0 gap-4 lg:mb-0 mb-12">

                                    <ul className="">
                                        {project?.frontendTechTitle && <li className="h3">{project.frontendTechTitle}:</li>}
                                        {work?.frontendTech && work.frontendTech.map((w, index) => <li className="h3" key={index}>{w}</li>)}
                                    </ul>
                                    <ul className="">
                                        <li className="h3">{project?.backendTechTitle && project.backendTechTitle}:</li>
                                        {work?.backendTech && work.backendTech.map((w, index) => <li className="h3" key={index}>{w}</li>)}
                                    </ul>
                                    <ul className="">
                                        <li className="h3">{project?.animationTechTitle && project.animationTechTitle}:</li>
                                        {work?.animationTech && work.animationTech.map((w, index) => <li className="h3" key={index}>{w}</li>)}
                                    </ul>
                                </div>
                            </>
                        )}
                        <div className={`titles block lg:mb-0 mb-2 ${work?.animationTech == null && work?.backendTech == null && work?.frontendTech == null ? 'row-start-3' : 'row-start-4'}`} >
                            <h3>{project?.deliverablesTechTitle && project.deliverablesTechTitle}</h3>
                        </div>
                        <div className={`info lg:col-start-3 
                                col-start-5 col-span-4 lg:mb-0 mb-12  ${work?.animationTech == null && work?.backendTech == null && work?.frontendTech == null ? 'row-start-3' : 'row-start-4'}`}>
                            {work?.deliverables && work.deliverables.map((d, index) => <li className="h3 list-none" key={index}>{d}</li>)}
                        </div>
                        {work && work.projectWebsite != null && (
                            <>
                                <div className="titles block row-start-5 lg:mb-0 mb-2">
                                    <h3>website</h3>
                                </div>
                                <div className="info row-start-5 lg:col-start-3 
                                col-start-4 col-span-4">
                                    <Link href={`${work.projectWebsite}`} target='_blank' className="h3 underline">live site</Link>
                                </div>
                            </>
                        )}

                    </motion.div>

                    <div className="imagesGrid mt-32 lg:grid block grid-cols-7 gap-x-5 gap-y-4 grid-flow-row">
                        {/* grid-rows-4 */}
                        {work?.thumbnail && (
                            <Image
                                src={typeof work.thumbnail === "string" ? work.thumbnail : work.thumbnail.asset.url}
                                height={373}
                                width={362}
                                alt={`${work.thumbnailAlt}`}
                                className="h-fit w-full col-span-3 lg:mb-0 mb-4"
                            />
                        )}

                        {work?.images && work.images.map((img, index) => (
                            console.log(img),
                            <Image
                                key={index}
                                src={`${img}`}
                                height={373}
                                width={362}
                                alt={`${work.imageAlts && work.imageAlts[index] ? work.imageAlts[index] : 'Default Alt Text'}`}
                                className="h-fit w-full col-span-3 last:col-span-3 last:col-start-5 lg:mb-0 mb-4"
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
