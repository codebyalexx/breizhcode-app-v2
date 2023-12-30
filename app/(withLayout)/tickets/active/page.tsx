import {TicketsLayout} from "@/app/(withLayout)/tickets/TicketsLayout";
import {getActiveTickets} from "@/src/queries/tickets.query";

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
            {tickets.map((t) => <li key={t.id}>
                {t.type}
            </li>)}
        </ul>
        <p>Lorem ipsum dolor euler prism</p>
    </article>);
}
