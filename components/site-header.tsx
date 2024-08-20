import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className='sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            <Link
              href={siteConfig.socials.contactUs}
              target='_blank'
              rel='noreferrer'
              className={cn(
                buttonVariants({ size: 'sm' }),
                'w-full sm:w-fit px-5'
              )}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
