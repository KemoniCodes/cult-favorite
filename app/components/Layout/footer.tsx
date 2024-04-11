import Link from "next/link"
import React from "react"

export default function Footer() {
    return (
        <>
            <div className="footerContainer w-screen lg:-ml-[50.5px] -ml-[25.5px] px-[15.5px] pb-1 mt-20">
                <footer>
                    <ul className="flex justify-between items-end">
                        <li className="h3 lg:w-auto w-min  !text-[18px]">
                            Copyright ©2024 <br /> cult favorite
                        </li>
                        <li className="h3 lg:w-auto w-min !text-[18px]">
                            <Link href={'mailto:HELLO@CULT-FAVORITE.COM'}>
                                HELLO@CULT-FAVORITE.COM
                            </Link>
                        </li>
                        <ul className="text-right">
                            <Link href={'https://www.instagram.com/cultfavorite.studio/'} target="_blank">
                                <li className="h3 !text-[18px]">instagram</li>
                            </Link>
                            <Link href={'https://www.behance.net/cultfavorite'} target="_blank">
                                <li className="h3 !text-[18px]">behance</li>
                            </Link>

                            <Link href={'https://www.linkedin.com/company/cult-favorite'} target="_blank">
                                <li className="h3 !text-[18px]">linkedin</li>
                            </Link>
                        </ul>
                    </ul>
                </footer>
            </div>
        </>
    )
}