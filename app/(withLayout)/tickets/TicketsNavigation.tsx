'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";

export const TicketsNavigation = () => {
    const route = usePathname()
    const ticketPage = route.split('/')[2]

    return (<header className={'relative w-full py-6 pb-16 px-3 bg-accent'}>
        <h1 className={'text-white text-3xl font-semibold'}>Mes titres</h1>
        <nav className={'absolute -bottom-5 left-3 right-3 bg-white rounded-lg'}>
            <ul className={'flex flex-row w-full'}>
                <li
                    className={clsx('w-[50%] text-center border-r-2 border-r-disabled/80', ticketPage === 'active' ? 'border-b-2 border-b-accent/90 rounded-lg rounded-r-none' : '')}
                >
                    <Link href={'/tickets/active'} className={clsx('block p-2', ticketPage === 'active' ? 'font-semibold' : '')}>
                        Titres en cours
                    </Link>
                </li>
                <li
                    className={clsx('w-[50%] text-center', ticketPage === 'inventory' ? 'border-b-2 border-b-accent/90 rounded-lg rounded-l-none' : '')}
                >
                    <Link href={'/tickets/inventory'} className={clsx('block p-2', ticketPage === 'inventory' ? 'font-semibold' : '')}>
                        Titres restants
                    </Link>
                </li>
            </ul>
        </nav>
    </header>);
}