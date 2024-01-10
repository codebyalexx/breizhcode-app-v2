"use client"

import {TicketsLayout} from "@/app/(withLayout)/tickets/TicketsLayout";
import { Ticket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TicketsInventory() {
    const router = useRouter()

    return (<TicketsLayout className="h-full">
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
                <Ticket size={132} className="text-gray-400" />
                <p className="font-bold text-base mb-6">Vous n&apos;avez aucun titre restant</p>
                <button onClick={() => {
                    router.push('/shop')
                }} className="text-sm text-white bg-accent p-2 px-3 rounded">
                    Acheter des titres
                </button>
            </div>
        </div>
    </TicketsLayout>);
}