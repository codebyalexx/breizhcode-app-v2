'use server';

import {prisma} from "@/libs/prisma";

export const getUser = async (name: string) => {
    const user = await prisma.user.findFirst({
        where: {
            name: name
        },
        select: {
            name: true,
            id: true,
        }
    })

    return user
}

export const getUser1 = async () => {
    return getUser('Alexandre');
}

export const getUser2 = async () => {
    return getUser('Alann');
}