import { cn } from '@/helpers/cn'
import Link from 'next/link'
import { BiSolidMedal } from 'react-icons/bi'
import { FaGamepad, FaRoute } from 'react-icons/fa'
import { FaFaceSmile } from 'react-icons/fa6'
import { GoHomeFill } from 'react-icons/go'
import { NavItemLink } from './nav-item-link/nav-item-link'
import { NavItem } from './types'

const listItens: NavItem[] = [
  {
    name: 'Home',
    icon: GoHomeFill,
    link: '/'
  },
  {
    name: 'Games',
    icon: FaGamepad,
    link: '/games'
  },
  {
    name: 'Top 10',
    icon: BiSolidMedal,
    link: '/top-10'
  },
  {
    name: 'Walkthroughs',
    icon: FaRoute,
    link: '/walkthroughs'
  }
]

export const NavItems = () => {
  return (
    <div className='flex flex-col h-full'>
      <ul className='flex-grow border-indigo-400/20 hover:border-indigo-400/40 my-4 border-t'>
        {listItens.map((item: NavItem, index: number) => (
          <NavItemLink item={item} key={index} />
        ))}
      </ul>

      <ul className='border-indigo-400/20 hover:border-indigo-400/40 my-4 border-t'>
        <Link
          href='/user'
          className={cn(
            'my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer flex gap-2 items-center hover:text-slate-100 transition-all duration-150'
          )}
        >
          <FaFaceSmile className='w-4 h-4' />
          User
        </Link>
      </ul>
    </div>
  )
}
