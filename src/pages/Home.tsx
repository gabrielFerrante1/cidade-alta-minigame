
import headerBg from '../assets/header-bg.svg'

export const Home = () => {
    return (
        <main>
            <div className='border-2 bg-slate-900 border-amber-300 rounded-sm  max-w-2xl'>
                <img src={headerBg} alt="header" className='h-16 -mt-5 mx-auto' />
            </div>
        </main>
    )
}