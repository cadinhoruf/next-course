import Image from 'next/image'
import { NavItems } from './nav-item/nav-item'

const NavBar = () => {
  return (
    <nav className='flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300'>
      <div className='flex items-center justify-center'>
        <Image className='w-auto h-12' src='/next.svg' alt='Next' width={200} height={200} />
      </div>
      <NavItems />
    </nav>
  )
}

export { NavBar }
