'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MobileNav from './mobile-nav'
import { MainNav } from './main-nav'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import headerNavLinks from '@/config/headerNavLinks'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined }>({
    width: undefined,
  })

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth })

    window.addEventListener('resize', handleResize)
    handleResize() // Initialize size on first render

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export function SiteHeader() {
  const { width } = useWindowSize()
  const headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-5 sticky top-0 z-50'

  const isDesktop = width !== undefined && width >= 650 // Adjust threshold as needed

  return (
    <header className={headerClass}>
      <MainNav />

      {isDesktop ? (
        <>
          <NavigationMenu className='no-scrollbar hidden max-w-30 sm:flex md:flex lg:flex'>
            <NavigationMenuList>
              {Object.values(headerNavLinks).map((dialog) => (
                <NavigationMenuItem key={dialog.title}>
                  {dialog.toggle ? (
                    <>
                      <NavigationMenuTrigger>
                        {dialog.title}{' '}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                          {dialog.dropdown.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href='/docs' legacyBehavior passHref>
                      <NavigationMenuLink>{dialog.title}</NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
          <Link href='' className={buttonVariants({ variant: 'default' })}>
            Contact Us
          </Link>
        </>
      ) : (
        <div>
          <ThemeToggle />
          <MobileNav />
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
