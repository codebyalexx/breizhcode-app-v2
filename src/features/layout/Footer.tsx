import Link from "next/link";
import {Plus, ShoppingBasket, Store, Ticket} from "lucide-react";

export const Footer = () => {
    return (<footer className={'fixed w-full bottom-0 right-0 left-0 bg-white border-t border-t-disabled/50 p-10 pt-3.5'}>
        <FooterNavigation />
    </footer>);
}

const FooterNavigation = () => {
    return (<nav className={'w-full'}>
        <ul className={'flex flex-row justify-between'}>
            <li>
                <Link href={'/cart'} className={'flex flex-col gap-2 items-center justify-center text-disabled font-medium'}>
                    <ShoppingBasket size={20} />
                    <span className={'text-sm'}>
                        Panier
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/titles/inventory'} className={'flex flex-col gap-2 items-center justify-center text-disabled font-medium'}>
                    <Ticket size={20} />
                    <span className={'text-sm'}>
                        Mes titres
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/shop'} className={'flex flex-col gap-2 items-center justify-center text-disabled font-medium'}>
                    <Store size={20} />
                    <span className={'text-sm'}>
                        Boutique
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/more'} className={'flex flex-col gap-2 items-center justify-center text-disabled font-medium'}>
                    <Plus size={20} />
                    <span className={'text-sm'}>
                        Plus
                    </span>
                </Link>
            </li>
        </ul>
    </nav>);
}