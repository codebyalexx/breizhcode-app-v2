import { cities } from "@/libs/cities"
import { cn } from "@/libs/utils"
import { useEffect, useState } from "react"

export const CityList = ({ opened=false, valueCallback }: {opened: boolean | undefined, valueCallback: any}) => {
    const [open, setOpen] = useState(opened)

    useEffect(() => {
        setOpen(opened)
    }, [opened])

    const stations = []
    for (const [cityName, subStations] of Object.entries(cities)) {
        for (const subStation of subStations) {
            let searchValidated = true;

            if (searchValidated) stations.push(<li className="w-full flex-1 mb-3.5 text-sm font-light" key={`${cityName}, ${subStation}`} onClick={() => {
                setOpen(false)
                valueCallback(`${cityName}, ${subStation}`)
            }}>
                {cityName}, {subStation}
            </li>)
        }
    }

    return (<div className={cn("py-3 bg-white z-20 absolute -left-1.5 -right-1.5 mt-1 top-full p-2", open ? "": " hidden")}>
        <ul className="w-full flex flex-col items-start justify-start flex-wrap">
            {stations}
        </ul>
    </div>)
}