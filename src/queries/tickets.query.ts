'use server';

import {prisma} from "@/libs/prisma";
import {list} from "postcss";

export const getTickets = async(validity: number = 0) => {
    const tickets = await prisma.ticket.findMany({
        where: {
            validity
        },
        select: {
            id: true,
            type: true,
            subtype: true,
            from: true,
            to: true,
            validity: true,
            expires: true
        },
        take: 1
    });

    return tickets;
}

export const getActiveTickets = async() => {
    const tickets: any = await getTickets(1);
    return tickets;
}

export const getNormalTickets = async() => {
    const tickets: any = await getTickets(0);
    return tickets;
}