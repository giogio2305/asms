import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/asms.jpg'
export default function Navbar () {

    return (
        <nav className="w-full flex items-center justify-evenly shadow-sm p-2">
        <ul className='flex items-center justify-evenly mx-4 w-[45%]'>
          <li className='font-bold text-zinc-600 hover:text-red-600 mx-4'><Link href='/#wh'>Pourquoi assiter</Link></li>
          <li className='font-bold text-zinc-600 hover:text-red-600 mx-4'><Link href='/#pa'>Partenaires</Link></li>
          <li className=' font-bold text-zinc-600 hover:text-red-600'><Link href='/#th'>Thématiques</Link></li>

        </ul>
      <div className="w-[100px] h-[60px] object-cover">
        <Image src={logo}/>
        </div>
        <ul className='flex items-center justify-evenly w-[45%] mx-4'>
          <li className='font-bold text-zinc-600 hover:text-red-600 mx-4'><Link href='/#sp'>Speakers</Link></li>
          <li className='font-bold text-zinc-600 hover:text-red-600 mx-4'><Link href='/billeterie'>Billeterie</Link></li>
          <li className='font-bold text-zinc-600 hover:text-red-600 mx-4'><Link href='/contacts'>Contacts</Link></li>
        </ul>
      </nav>
    )
}