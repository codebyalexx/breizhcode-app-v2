'use server';

import {prisma} from "@/libs/prisma";
import {cookies} from "next/headers";

export const calculateTicketExpiration = () => {
    const date = new Date();
    date.setTime(date.getTime() + (3 * 60 * 60 * 1000));
    return date;
}


export const addTicket = async({
    type= "Ticket intermodal TUB-BREIZHGO",
    subtype = "-26 ans",
    from= "Saint-Brieuc",
    to= "Paimpol",
    userId= null,
    expires=calculateTicketExpiration(),
                               }: any) => {
    const ticket = await prisma.ticket.create({
        data: {
            type,
            subtype,
            from,
            to,
            userId,
            expires,
            validity: 1
        }
    });

    return ticket;
}

export const addTicket_allez_cu = async() => {
    const cookieStore  = cookies()
    const userId = cookieStore.get('userId')?.value
    return await addTicket({
        userId,
        from: 'Paimpol, Gare',
        to: 'Saint-Brieuc, Gare'
    })
}

export const addTicket_retour_cu = async() => {
    const cookieStore  = cookies()
    const userId = cookieStore.get('userId')?.value
    return await addTicket({
        userId,
        from: 'Saint-Brieuc, Gare',
        to: 'Paimpol, Gare'
    })
}