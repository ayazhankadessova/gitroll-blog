'use client'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function MainNav() {
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link
        href='/'
        className='lg:ml-4 md:ml-1 mr-6 flex items-center space-x-2'
      >
        <h2 className='font-bold text-3xl'>{siteConfig.name}</h2>
      </Link>
    </nav>
  )
}
