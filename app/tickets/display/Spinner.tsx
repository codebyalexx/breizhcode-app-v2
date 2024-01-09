'use client';
import {useRef} from "react";

export const Spinner = () => {
    const ref1 = useRef();
    const ref2 = useRef();

    return (<div className={'w-52 h-52 relative'} onTouchStart={(e) => {
        // @ts-ignore
        ref1.current.style = `position: fixed; left: ${Math.round(e.touches[0].clientX)-30}px; top: ${Math.round(e.touches[0].clientY)}px;  scale: 1.2;`;
        // @ts-ignore
        ref2.current.style = `position: fixed; left: ${Math.round(e.touches[0].clientX)-30}px; top: ${Math.round(e.touches[0].clientY)}px;  scale: 1.2;`;
    }} onTouchEnd={() => {
        // @ts-ignore
        ref1.current.style = `position: absolute; scale: 1.2;`;
        // @ts-ignore
        ref2.current.style = `position: absolute; scale: 1.2;`;
    }} onTouchMove={(e) => {
        // @ts-ignore
        ref1.current.style = `position: fixed;left: ${Math.round(e.touches[0].clientX)-30}px; top: ${Math.round(e.touches[0].clientY)}px`;
        // @ts-ignore
        ref2.current.style = `position: fixed; left: ${Math.round(e.touches[0].clientX)-30}px; top: ${Math.round(e.touches[0].clientY)}px`;
    }} >
        <img src="/ticketcercle.png" alt="ticket circle sample icon" className={'w-full max-w-52 h-full max-h-52'}/>
        {/* @ts-ignore */}
        <span className={'absolute top-20 left-0 h-9 w-[100%] animate-spin flex justify-between max-w-52 max-h-52'} ref={ref1} style={{
            scale: '1.2'
        }}>
                            <span></span>
                            <span className={'block bg-[#c6e011] w-9 h-9 rounded-full'}></span>
                        </span>
        {/* @ts-ignore */}
        <span className={'absolute top-20 right-0 h-9 w-[100%] animate-spin max-w-52 max-h-52'} ref={ref2} style={{
            scale: '1.2'
        }}>
                            <span className={'block bg-[#b93400] w-9 h-9 rounded-full'}></span>
                            <span></span>
                        </span>
    </div>)
}