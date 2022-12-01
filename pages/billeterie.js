import Navbar from  './components/Navbar'
import sl3 from './assets/sliii.jpg'
import Image from 'next/image'

export default function Billeterie (){

    return(
        <div className='flex flex-col items-center justify-center w-full min-h-screen'>
        <Navbar/>
        <div className='w-full h-[56vh] bg-slate-600'>
        <Image className='w-full h-full object-cover object-top' src={sl3}/>
        </div>

        <div className='flex flex-col items-center justify-center my-20 w-[76%] h-[60vh] rounded-lg shadow-md mt-[-106px] bg-white p-1'>
            <h2 className='font-semibold text-2xl text-zinc-700 mt-20'>Inscrivez vos informations et réservez gratuitement votre place.</h2>

            <div className='flex flex-col items-center justify-center w-[76%] p-3 my-10'>
            <div className='flex items-center justify-center w-full p-3'>
                                <div className='flex flex-col'>
                                    <label className='font-medium text-zinc-600'>Nom</label>
                                    <input type='text' className='text-md font-semibold w-[128%] p-2 bg-slate-100 my-1.5 rounded-md' />
                                </div>

                                <div className='flex flex-col mx-20'>
                                    <label className='font-medium text-zinc-600'>Prénom</label>
                                    <input type='text' className='w-[128%] p-2 bg-slate-100 my-1.5 rounded-md' />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='font-medium text-zinc-600'>Email</label>
                                    <input type='email' className='w-[128%] p-2 bg-slate-100 my-1.5 rounded-md' />
                                </div>
                            </div>

                            <button className='flex items-center justify-start w-32 my-4 p-2.5 rounded-md bg-red-700 text-white font-semibold text-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-6 h-6 mx-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                            </svg>

                                Réserver</button>

            </div>
        </div>
        </div>
    )
}