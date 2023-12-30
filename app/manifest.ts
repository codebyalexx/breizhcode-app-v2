import {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'BreizhGo MTicket',
        short_name: 'BreizhGo MTicket',
        description: 'BreizhGo MTicket App',
        start_url: '/',
        display: 'fullscreen',
        background_color: '#6980a9',
        theme_color: '#6980a9',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
            }
        ]
    }
}