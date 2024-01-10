import {ReactNode} from "react";
import {TicketsNavigation} from "@/app/(withLayout)/tickets/TicketsNavigation";
import { cn } from "@/libs/utils";

export const TicketsLayout = ({ children, className }: {children: ReactNode, className?: string}) => {
    return (<div className="h-full">
        <TicketsNavigation />
        <div className={cn('pt-8', className)}>
            {children}
        </div>
    </div>);
}