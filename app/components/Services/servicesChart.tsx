'use client'
import React, { useEffect, useState } from "react";
import { getServices } from "@/sanity/lib/query";
import { ServicesType } from "@/sanity/types";


const ServicesContext = React.createContext<ServicesType | null>(null);

export default function ServicesChart() {
    const [services, setServices] = useState<ServicesType | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await getServices();
            setServices(data[0]);
        };
        fetchServices();
    }, []);

    // console.log(services)

    const wrapInSpan = (list: string[]) => {
        const spanList: JSX.Element[] = [];
        for (let i = 0; i < list.length; i += 2) {
            spanList.push(
                <span key={i}>
                    <li className="h3 !leading-[.98]">{list[i]}</li>
                    {list[i + 1] && <li className="h3">{list[i + 1]}</li>}
                </span>
            );
        }
        return spanList;
    };

    return (
        <>
            <ServicesContext.Provider value={services}>
                <div className="services grid grid-cols-7 grid-rows-8 gap-x-5 gap-y-4 mt-8 pt-2 relative top-[16rem]">
                    <div className="titles block">
                        <h3>{services?.servicesHeader}</h3>
                        <h4>{services?.servicesSubHeader}</h4>
                    </div>
                    <div className="list col-start-3 col-span-4">
                        <ul className="flex justify-between">
                            {services && wrapInSpan(services.servicesList)}
                        </ul>
                    </div>
                </div>
            </ServicesContext.Provider>
        </>
    )
}