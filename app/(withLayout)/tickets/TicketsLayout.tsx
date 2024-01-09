import {ReactNode} from "react";
import {TicketsNavigation} from "@/app/(withLayout)/tickets/TicketsNavigation";

export const TicketsLayout = ({ children }: {children: ReactNode}) => {
    return (<div>
        <TicketsNavigation />
        <div className={'pt-8'}>
            {children}
        </div>
    </div>);
}