import React from "react";

export default function WorksGrid() {
    return (
        // relative top-[16rem]
        <div className="works grid grid-cols-7 grid-rows-8 gap-x-5 gap-y-4 mt-8 pt-2 ">
            <div className="titles block">
                <h3>works</h3>
                <h4>selected projects</h4>
            </div>
            <div className="list col-start-3 col-span-4">
                <ul className="flex justify-between">
                    {/* <span className="">
                        <li className="h3">branding</li>
                        <li className="h3">web design</li>
                    </span>
                    <span className="">
                        <li className="h3">web development</li>
                        <li className="h3">packaging design</li>
                    </span>
                    <span className="">
                        <li className="h3">naming</li>
                        <li className="h3">creative direction</li>
                    </span> */}
                </ul>
            </div>
        </div>
    )
}