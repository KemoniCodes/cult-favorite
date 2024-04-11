'use client'
import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "../components/Layout/nav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
    const [date, setDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const router = usePathname();

    useEffect(() => {
        if (router) {
            document.querySelector('.contactLink')?.classList.add('linkActive')
        }
    }, [router])

    const formattedDate = useMemo(() => {
        const today = new Date();
        const month = today.toLocaleString('default', { month: 'long' });
        const day = today.toLocaleString('default', { weekday: 'long' });
        const dayNumber = today.getDate();
        return `${day}, ${month} ${dayNumber}`;
    }, []);

    useEffect(() => {
        setDate(formattedDate);
    }, [formattedDate]);

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date();
            const hour = today.getHours();
            const minute = today.getMinutes();
            const second = today.getSeconds();
            const ampm = hour >= 12 ? 'pm' : 'am';
            const formattedHour = hour % 12 || 12;
            const time = `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${ampm}`;
            setCurrentTime(time);
        }, 1000);

        return () => clearInterval(interval);
    }, [])
    return (
        <>
            <div className="contactPageContainer pb-16 w-max m-auto">
                <div className="fixed top-0 left-0 right-0 mx-[50.5px] z-50" >
                    <Nav />
                </div>
                <motion.h1 className="text-[200px] uppercase leading-[12rem] text-center mt-[11rem] mb-4" initial={{ opacity: 0 }}
                    // style={{ y: 1400 }} 
                    transition={{
                        ease: "linear",
                        duration: .3
                    }}
                    animate={{ y: 0, opacity: 1 }}>
                    let&apos;s chat
                </motion.h1>
                <motion.div className="about pt-2 relative text-center "
                    initial={{ opacity: 0 }}
                    // style={{ y: 1400 }} 
                    transition={{
                        ease: "linear",
                        duration: .3
                    }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <h3>GOT A PROJECT? GIVE ME A RING(EMAIL THE STUDIO)</h3>
                    <h3>ANOTHER CREATIVE WANTING TO COLLAB? LET’S DO IT, IMMEDIATELY</h3>
                    <h3>HAVE SOME KIND WORDS? PLZ SEND</h3>
                    <Link href={'mailto:HELLO@CULT-FAVORITE.COM'}>
                        <h2 className=" my-16">HELLO@CULT-FAVORITE.COM</h2>
                    </Link>

                    <div className="info flex justify-center gap-16">
                        <ul className="text-left">
                            <li className="h3">{date}</li>
                            <li className="h3">{currentTime}</li>
                        </ul>
                        <ul className="text-right">
                            <Link href={'https://www.instagram.com/cultfavorite.studio/'} target="_blank">
                                <li className="h3">instagram</li>
                            </Link>
                            <Link href={'https://www.behance.net/cultfavorite'} target="_blank">
                                <li className="h3">behance</li>
                            </Link>

                            <Link href={'https://www.linkedin.com/company/cult-favorite'} target="_blank">
                                <li className="h3">linkedin</li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </>
    )
}