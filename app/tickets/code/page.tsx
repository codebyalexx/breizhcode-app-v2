import {getActiveTickets} from "@/src/queries/tickets.query";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import QRCode from 'react-qr-code';

export default async function TicketCode() {
    const tickets = await getActiveTickets();
    const ticket = tickets[0];
    const createdAt = new Date(ticket.createdAt);
    const date = new Date(ticket.expires);

    const qrCodeValue = new Buffer(
        JSON.stringify(JSON.stringify({
            alg: 'hs256',
            typ: 'JWT'
        })+JSON.stringify({
            id: '202-658F6AE6A1193',
            to: ticket.expires.toString(),
            expires: date.getTime(),
            from: ticket.createdAt.toString(),
            nid: 202,
            iat: 1703898577
        }) + '7')).toString('base64')

    return (<div className={'flex flex-col h-full w-full bg-accent'}>
        <div className={'relative h-full flex flex-col items-center justify-center'}>
            <Link href={'/tickets/display'} className={'absolute top-4 left-3'}>
                <ChevronLeft size={32} />
            </Link>
            <div className={'relative w-fit p-2 mb-11 border border-black bg-white rounded-lg'} style={{
                scale: '1.2'
            }}>
                <QRCode value={qrCodeValue} style={{
                    width: '100%',
                }} />
            </div>
            <p className={'text-white font-black text-2xl'}>202-658F6AE6A1193</p>
        </div>
        <div className={'bg-white py-24 text-center'}>
            <p className={'font-black text-2xl'}>Expire le {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} <span className={'block'}>à {date.getHours()}:{date.getMinutes()}</span></p>
        </div>
    </div>);
}