'use server';

import {prisma} from "@/libs/prisma";

export const resetTickets = async() => {
    await prisma.ticket.deleteMany({});
}