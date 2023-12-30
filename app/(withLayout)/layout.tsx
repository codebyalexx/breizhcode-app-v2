import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import {Header} from "@/src/features/layout/Header";
import {Footer} from "@/src/features/layout/Footer";
import React from "react";
import {clsx} from "clsx";
import {CookiesProvider} from "next-client-cookies/server";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BreizhGo MTicket',
  description: 'BreizhGo MTicket App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CookiesProvider>
        <html lang="fr">
            <body className={clsx('bg-base w-full h-screen', inter.className)}>
                <div className={'flex flex-col h-full'}>
                    <Header />
                    <main className={'h-full py-12'}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    </CookiesProvider>
  )
}
