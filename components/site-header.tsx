import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { MainNav } from './main-nav'

export function SiteHeader() {
  return (
    <header className='sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='w-full flex  flex-col lg:flex-row'>
          <div className=' flex justify-between  lg:flex-row'>
            <div>
              <MainNav />
            </div>
            <div>hi</div>
            <div>
              <nav className='flex items-center'>
                <Link
                  href={siteConfig.socials.contactUs}
                  className={cn(
                    buttonVariants({ size: 'sm' }),
                    'w-full sm:w-fit px-5 py-0'
                  )}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
