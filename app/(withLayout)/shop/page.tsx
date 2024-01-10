"use client"

import { cities } from "@/libs/cities"
import { cn } from "@/libs/utils"
import { addTicket } from "@/src/actions/add-ticket"
import { resetTickets } from "@/src/actions/reset-tickets.action"
import { getUser1 } from "@/src/queries/user.query"
import { useCookies } from "next-client-cookies"
import { useEffect, useState } from "react"

export default function ShopPage() {
    const cookies = useCookies()

    const [departure, setDeparture] = useState('')
    const [destination, setDestination] = useState('')

    const [departureOpen, setDepartureOpen] = useState(false)
    const [destinationOpen, setDestinationOpen] = useState(false)

    const submit = async () => {
        const from = `${departure}`
        const to = `${destination}`

        setDeparture('')
        setDestination('')

        const user1 = await getUser1()

        cookies.set('userId', user1 ? user1?.id : '');
        cookies.set('name', user1 ? user1?.name : '');

        if (user1) alert('Utilisateur 1 selectionné !')

        await resetTickets()

        alert('Tous les tickets ont étés effacés !')

        await addTicket({
            userId: user1?.id || null,
            from,
            to
        })

        alert(`Ticket créé de ${from || 'ERREUR'} à ${to || 'ERREUR'} pour Utilisateur 1 (${user1?.id || 'ERREUR'})`)
    }

    return <div className="w-full h-full flex flex-col items-center justify-end bg-accent/50">
        <div className="h-full w-full flex items-center justify-center">
            <div className="m-2 w-full rounded-lg bg-white p-1.5">
                <div className="relative flex flex-row w-full border border-accent rounded-lg mb-2">
                    <div className="bg-accent w-12 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
                        F
                    </div>
                    <div className="flex flex-col items-start justify-start w-full p-1 px-1.5">
                        <p className="text-xs">Départ</p>
                        <input type="text" name="departure" className="w-full text-sm font-bold placeholder:font-normal outline-none" placeholder="Votre point de départ" value={departure} onChange={(e) => setDeparture(e.target.value)} onClick={() => setDepartureOpen(true)} onBlur={() => setDepartureOpen(false)} />
                    </div>
                    <CityList opened={departureOpen} valueCallback={(v: string) => setDeparture(v)} />
                </div>
                <div className="relative flex flex-row w-full border border-accent rounded-lg mb-2">
                    <div className="bg-accent w-12 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
                        F
                    </div>
                    <div className="flex flex-col items-start justify-start w-full p-1 px-1.5">
                        <p className="text-xs">Arrivée</p>
                        <input type="text" name="destination" className="w-full text-sm font-bold placeholder:font-normal outline-none" placeholder="Votre desination" value={destination} onChange={(e) => setDestination(e.target.value)} onClick={() => setDestinationOpen(true)} onBlur={() => setDestinationOpen(false)} />
                    </div>
                    <CityList opened={destinationOpen} valueCallback={(v: string) => setDestination(v)} />
                </div>
                {departure.length === 0 ?<p className="text-sm">Vous devez sélectionner un point de départ.</p> : ''}
                <div className="flex items-center justify-center my-3">
                    <button className="p-2 px-3 rounded bg-gray-200 text-gray-500 font-medium" onClick={submit}>Rechercher</button>
                </div>
            </div>
        </div>
        <div className="mb-12 h-fit w-full">
            <img src="/shopbanner.png" alt="Breizh go banner" />
        </div>
    </div>
}

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