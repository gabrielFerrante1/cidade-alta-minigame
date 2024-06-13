import headerBg from '@/assets/header-bg.svg'

type Props = {
    children: React.ReactNode
}

export const Card = ({ children }: Props) => {
    return (
        <div className='flex flex-col border-2 border-amber-400 rounded-sm h-80'>
            <img
                src={headerBg}
                alt="header bg"
                className='h-14 -mt-5 mx-auto'
            />

            <div className='flex-1'>
                {children}
            </div>
        </div>
    )
}