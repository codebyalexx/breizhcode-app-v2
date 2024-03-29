"use server";

import { prisma } from "@/libs/prisma";

export const calculateTicketExpiration = () => {
  const date = new Date();
  date.setTime(date.getTime() + 3 * 60 * 60 * 1000);
  return date;
};

export const addTicket = async ({
  type = "Ticket intermodal TUB-BREIZHGO",
  subtype = "-26 ans",
  from = "Saint-Brieuc",
  to = "Paimpol",
  userId = null,
  expires = calculateTicketExpiration(),
}: any) => {
  const ticket = await prisma.ticket.create({
    data: {
      type,
      subtype,
      from,
      to,
      userId,
      expires,
      validity: 1,
    },
  });

  return ticket;
};
