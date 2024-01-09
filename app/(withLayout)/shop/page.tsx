"use client"

import { useState } from "react"

export default function ShopPage() {
    const [departure, setDeparture] = useState('')
    const [destination, setDestination] = useState('')

    return <div className="w-full h-full flex flex-col items-center justify-end bg-accent/50">
        <div className="h-full w-full flex items-center justify-center">
            <div className="m-2 w-full rounded-lg bg-white p-1.5">
                <div className="relative flex flex-row w-full border border-accent rounded-lg mb-2">
                    <div className="bg-accent w-12 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
                        F
                    </div>
                    <div className="flex flex-col items-start justify-start w-full p-1 px-1.5">
                        <p className="text-xs">Départ</p>
                        <input type="text" name="departure" className="w-full text-sm font-bold placeholder:font-normal outline-none" placeholder="Votre point de départ" value={departure} onChange={(e) => setDeparture(e.target.value)} />
                    </div>
                    <div className="py-3 bg-white z-20 absolute -left-1.5 -right-1.5 top-full p-2 hidden">
                        <ul className="w-full">
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                        </ul>
                    </div>
                </div>
                <div className="relative flex flex-row w-full border border-accent rounded-lg mb-2">
                    <div className="bg-accent w-12 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
                        F
                    </div>
                    <div className="flex flex-col items-start justify-start w-full p-1 px-1.5">
                        <p className="text-xs">Arrivée</p>
                        <input type="text" name="destination" className="w-full text-sm font-bold placeholder:font-normal outline-none" placeholder="Votre desination" value={destination} onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="py-3 bg-white z-20 absolute -left-1.5 -right-1.5 top-full p-2 hidden">
                        <ul className="w-full">
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                            <li className="w-full mb-1">Paimpol</li>
                            <li className="w-full mb-1">Plouah</li>
                            <li className="w-full mb-1">Saint-Brieuc</li>
                            <li className="w-full mb-1">Guingamp</li>
                        </ul>
                    </div>
                </div>
                {departure.length === 0 ?<p className="text-sm">Vous devez sélectionner un point de départ.</p> : ''}
                <div className="flex items-center justify-center my-3">
                    <button className="p-2 px-3 rounded bg-gray-200 text-gray-500 font-medium">Rechercher</button>
                </div>
            </div>
        </div>
        <div className="mb-14 bg-black h-fit w-full">bottom</div>
    </div>
}