import React from "react";
import {Inter} from "next/font/google";
import {clsx} from "clsx";
import '@/app/globals.css'
import {CookiesProvider} from "next-client-cookies/server";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BreizhGo MTicket',
  description: 'BreizhGo MTicket',
    themeColor: '#ffffff',
    background: '#ffffff'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <CookiesProvider>
            <html lang="fr">
                <body className={clsx('bg-base w-full h-screen bg-white overflow-hidden', inter.className)}>
                    {children}
                </body>
            </html>
      </CookiesProvider>
    )
}
