import Image from 'next/image'
import { NavItems } from './nav-item/nav-item'

const NavBar = () => {
  return (
    <nav className='top-0 left-0 fixed flex flex-col border-indigo-400/20 hover:border-indigo-400/40 bg-slate-900 p-2 border-r w-72 h-screen text-slate-300'>
      <div className='flex justify-center items-center'>
        <Image className='w-auto h-12' src='/next.svg' alt='Next' width={200} height={200} />
      </div>
      <NavItems />
    </nav>
  )
}

export { NavBar }
