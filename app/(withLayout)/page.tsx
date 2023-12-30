'use client';

import {Plus, Trash2, User} from "lucide-react";
import {clsx} from "clsx";
import React from "react";
import {getUser1, getUser2} from "@/src/queries/user.query";
import { useCookies } from 'next-client-cookies'
import {resetTickets} from "@/src/actions/reset-tickets.action";
import {addTicket_allez_cu, addTicket_retour_cu} from "@/src/actions/add-ticket";

export default function Home() {
    const cookies = useCookies()

    return (
        <div className={'p-4'}>
            <div className={'flex gap-2 flex-wrap mb-2'}>
                <button className={'flex items-center p-1 px-3 bg-indigo-500 rounded-full text-white font-medium text-sm'} onClick={async () => {
                    const user1 = await getUser1();
                    cookies.set('userId', user1 ? user1.id : '');
                    // @ts-ignore
                    cookies.set('name', user1 ? user1.name : '');
                }}><User size={20} /> Select User 1 (Alexandre)</button>
                <button className={'flex items-center p-1 px-3 bg-orange-500 rounded-full text-white font-medium text-sm'} onClick={async () => {
                    const user2 = await getUser2();
                    cookies.set('userId', user2 ? user2.id : '');
                    // @ts-ignore
                    cookies.set('name', user2 ? user2.name : '');
                }}><User size={20} /> Select User 2 (Alann)</button>
                <button className={'flex items-center p-1 px-3 bg-red-500 rounded-full text-white font-medium text-sm'} onClick={async () => {
                    await resetTickets()
                    alert('Deleted all tickets successfully!')
                }}><Trash2 size={20} /> Reset Tickets</button>
                <button className={'flex items-center p-1 px-3 bg-green-500 rounded-full text-white font-medium text-sm'} onClick={async() => {
                    const ticket = await addTicket_allez_cu();
                    alert('Created ticket from Paimpol to Saint-Brieuc for user ' + cookies.get('name'))
                }}><Plus size={20}/> Paimpol Saint-Brieuc {cookies.get('name') || undefined}</button>
                <button className={'flex items-center p-1 px-3 bg-blue-500 rounded-full text-white font-medium text-sm'}onClick={async() => {
                    const ticket = await addTicket_retour_cu();
                    alert('Created ticket from Saint-Brieuc to Paimpol for user ' + cookies.get('name'))
                }}><Plus size={20}/> Saint-Brieuc Paimpol {cookies.get('name') || undefined}</button>
            </div>
            <div>
                <p>
                    <span className={'font-medium'}>User: </span>{cookies.get('name') || 'undefined'}
                </p>
            </div>
        </div>
  )
}