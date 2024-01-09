export const Header = () => {
    return (<header className={'fixed top-0 left-0 right-0 w-full p-3 pt-0 px-6 bg-header'}>
        <div className={'flex flex-row justify-between items-center'}>
            <span className={'basis-1 grow opacity-0'}>Empty</span>
            <span className={'basis-1 grow'}>
                <img src="/banner.png" alt="BreizhGO banner" className={'h-7'}/>
            </span>
            <span className={'basis-1 grow flex flex-col justify-center items-end'}>
                <img src="/profileIcon.png" alt="Profile Icon" className={'h-9'} />
            </span>
        </div>
    </header>)
}