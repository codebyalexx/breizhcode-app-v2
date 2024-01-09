import {TicketsLayout} from "@/app/(withLayout)/tickets/TicketsLayout";
import {getActiveTickets} from "@/src/queries/tickets.query";
import {Ticket} from "@/src/features/ticket/Ticket";

export default async function ActiveTickets() {
    const activeTickets = await getActiveTickets();

    return (<TicketsLayout>
        {activeTickets?.length > 0 ? <ActiveTicketsList tickets={activeTickets} /> : <div>
            Pas de tickets
        </div>}
    </TicketsLayout>);
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
