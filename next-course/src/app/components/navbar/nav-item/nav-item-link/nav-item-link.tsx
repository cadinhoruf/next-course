import { cn } from '@/helpers/cn'
import Link from 'next/link'
import { NavItemLinkProps } from './types'

export const NavItemLink = ({ item }: NavItemLinkProps) => {
  return (
    <Link
      href={item.link}
      className={cn(
        'my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer flex gap-2 items-center hover:text-slate-100 transition-all duration-150'
      )}
    >
      <item.icon className='w-4 h-4' />
      {item.name}
    </Link>
  )
}
