import {CalendarX, Flag, QrCode, UserRoundCheck} from "lucide-react";

export const Ticket = ({ ticket }: {ticket:any}) => {
    const date = new Date(ticket.expires)

    return (<div className={'mb-2 rounded-lg border border-accent mx-2.5 bg-white'}>
        <header className={'w-full flex justify-between bg-[#dfe7f4] rounded-lg rounded-b-none'}>
            <span className={'rounded-lg rounded-tr-none rounded-bl-none border-r border-b border-accent bg-white flex flex-row items-center justify-center px-4'}>
                <UserRoundCheck size={20} className={'text-accent'} />
                <span className={'font-bold text-2xl'}>1</span>
            </span>
            <h2 className={'p-2 text-right font-bold text-lg'}>{ticket.type} <span className={'block -mt-1'}>{ticket.subtype}</span></h2>
        </header>
        <div className={'p-2'}>
            <div className={'flex w-full justify-end mb-3'}>
                <span className={'bg-success-light text-success font-semibold rounded-full px-1 py-1 text-xs flex items-center'}>
                    <span className={'inline-block h-2.5 w-2.5 bg-success rounded-full mr-1.5'}></span>
                    en cours
                </span>
            </div>
            <div className={'mb-3 flex justify-between w-full'}>
                <div>
                    <span className={'text-sm flex items-center mb-1'}>
                        <Flag size={18} className={'text-accent mr-2'} /> {ticket.from}
                    </span>
                    <span className={'text-sm flex items-center mb-3'}>
                        <Flag size={18} className={'text-accent mr-2'} /> {ticket.to}
                    </span>
                    <p>Valide jusqu'au :</p>
                    <span className={'flex font-bold items-center'}>
                        <CalendarX size={20} className={'text-red-500 mr-1.5'} /> {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} à {date.getHours()}:{date.getMinutes()}
                    </span>
                </div>
                <aside className={'border-l border-l-accent flex flex-col justify-end pl-2'}>
                    <span className={'border border-black rounded p-1'}>
                        <img src={'/qrcode.png'}  alt={'qrcode sample image'} className={'w-12'}/>
                    </span>
                </aside>
            </div>
            <button className={'bg-accent w-full text-white rounded p-2.5'}>Valider une correspondance</button>
        </div>
    </div>);
}