import {TicketsLayout} from "@/app/(withLayout)/tickets/TicketsLayout";
import { Ticket } from "@/src/features/ticket/Ticket";
import {getActiveTickets} from "@/src/queries/tickets.query";
import { TicketIcon } from "lucide-react";

export default async function ActiveTickets() {
    const activeTickets = await getActiveTickets();

    return (activeTickets?.length > 0 ? <TicketsLayout>
        <ActiveTicketsList tickets={activeTickets} />
    </TicketsLayout> : <TicketsLayout className="h-full">
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center px-12">
                <TicketIcon size={132} className="text-gray-400" />
                <p className="font-bold text-base mb-1">Vous n&apos;avez aucun titre en cours</p>
                <p className="text-sm font-normal text-center">Rendez-vous dans titres restants pour en valider un nouveau</p>
            </div>
        </div>
    </TicketsLayout>)
}

interface ActiveTicketsProps {
    tickets: any
}

const ActiveTicketsList = ({ tickets }: ActiveTicketsProps) => {
    return (<article>
        <ul>
            {tickets.map((t:any) => <li key={t.id}>
                <Ticket ticket={t} />
            </li>)}
        </ul>
        <div className={'px-4 flex flex-row'}>
            <span className={'rounded-full bg-accent w-7 h-6 text-white flex items-center justify-center'}>
                i
            </span>
            <p className={'ml-2.5 text-xs'}>Une pièce justificative doit être présenté au conducteur lors de la monté. <span className={'block mt-2.5'}>Validité : titre valable 3h après la validation.</span></p>
        </div>
    </article>);
}
