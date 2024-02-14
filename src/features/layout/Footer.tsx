'use client';

import Link from "next/link";
import {Plus, ShoppingBasket, Store, Ticket} from "lucide-react";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";

export const Footer = () => {
    return (<footer className={'fixed w-full bottom-0 right-0 left-0 bg-white border-t border-t-disabled/50 p-10 pt-3.5'}>
        <FooterNavigation />
    </footer>);
}

const FooterNavigation = () => {
    const route = usePathname()
    const pageName = route.split('/')[1] || 'home'

    console.log(pageName === 'tickets');
    

    return (<nav className={'w-full'}>
        <ul className={'flex flex-row justify-between'}>
            <li>
                <Link href={'/cart'} className={clsx('flex flex-col gap-2 items-center justify-center text-disabled font-medium', pageName === 'cart' ? '!text-accent' : '')}>
                    <ShoppingBasket size={20} />
                    <span className={'text-sm'}>
                        Panier
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/tickets/inventory'} className={clsx('flex flex-col gap-2 items-center justify-center text-disabled font-medium', pageName === 'tickets' ? '!text-accent' : '')}>
                    <Ticket size={20} />
                    <span className={'text-sm'}>
                        Mes titres
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/shop'} className={clsx('flex flex-col gap-2 items-center justify-center text-disabled font-medium', pageName === 'shop' ? '!text-accent' : '')}>
                    <Store size={20} />
                    <span className={'text-sm'}>
                        Boutique
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/more'} className={clsx('flex flex-col gap-2 items-center justify-center text-disabled font-medium', pageName === 'more' ? '!text-accent' : '')}>
                    <Plus size={20} />
                    <span className={'text-sm'}>
                        Plus
                    </span>
                </Link>
            </li>
        </ul>
    </nav>);
}