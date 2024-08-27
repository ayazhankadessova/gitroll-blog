'use client'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function MainNav() {
  return (
    <nav className='flex items-center ml-4 min-[750px]:ml-1'>
      <Link href='/'>
        <h2 className='font-bold text-3xl'>{siteConfig.name}</h2>
      </Link>
    </nav>
  )
}
