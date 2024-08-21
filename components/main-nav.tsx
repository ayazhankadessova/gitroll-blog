'use client'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function MainNav() {
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <span className='font-bold text-2xl'>{siteConfig.name}</span>
      </Link>
    </nav>
  )
}
