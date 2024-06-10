import headerBg from '../assets/header-bg.svg'

export const Card = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='border-2 border-amber-400 rounded-sm'>
            <img
                src={headerBg}
                alt="header bg"
                className='h-14 -mt-5 mx-auto'
            />

            {children}
        </div>
    )
}