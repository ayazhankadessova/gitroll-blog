import { siteConfig } from '@/config/site'
import { Icons } from './icons'
import Link from 'next/link'

export function BlogFooter() {
  return (
    <footer>
      <div className='mb-6 mt-14 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a target='_blank' rel='noreferrer' href={siteConfig.socials.discord}>
            <span className='sr-only'>Discord</span>
            <Icons.discord className='h-8 w-8' />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig.socials.linkedin}
          >
            <span className='sr-only'>Linkedin</span>
            <Icons.linkedin className='h-6 w-6' />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.socials.twitter}>
            <span className='sr-only'>Twitter</span>
            <Icons.twitter className='h-6 w-6' />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.socials.youtube}>
            <span className='sr-only'>YouTube</span>
            <Icons.youtube className='h-10 w-10' />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.socials.medium}>
            <span className='sr-only'>Medium</span>
            <Icons.medium className='h-10 w-10' />
          </a>
        </div>
        <p className='mt-2 text-sm text-gray-700'>
          © 2024 GitRoll, all rights reserved
        </p>
        <div className='mt-2 flex justify-between'>
          <Link href='/' className='mr-2'>
            <p className='underline text-sm text-gray-500'>Terms of Use</p>
          </Link>
          <Link href='/' className='mr-2'>
            <p className='underline text-sm text-gray-500'>
              Subscription Agreement
            </p>
          </Link>
          <Link href='/'>
            <p className='underline text-sm text-gray-500'>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
