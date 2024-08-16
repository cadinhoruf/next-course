import { IconType } from 'react-icons'
import { FaGamepad, FaRoute } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { BiSolidMedal } from 'react-icons/bi'
import { FaFaceSmile } from 'react-icons/fa6'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

type NavItem = {
  name: string
  icon: IconType
  link: Url
}

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
    link: '/top10'
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
      <ul className='flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40'>
        {listItens.map((item: NavItem, index: number) => (
          <Link
            href={item.link}
            key={index}
            className='my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer flex gap-2 items-center hover:text-slate-100 transition-all duration-150'
          >
            <item.icon className='w-4 h-4' />
            {item.name}
          </Link>
        ))}
      </ul>

      <ul className='my-4 border-t border-indigo-400/20 hover:border-indigo-400/40'>
        <Link
          href='/user'
          className='my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer flex gap-2 items-center hover:text-slate-100 transition-all duration-150'
        >
          <FaFaceSmile className='w-4 h-4' />
          User
        </Link>
      </ul>
    </div>
  )
}
