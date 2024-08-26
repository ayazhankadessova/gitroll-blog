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
import { ChevronDown } from 'lucide-react'

export function SiteHeader() {
  const headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-5 sticky top-0 z-50'

  return (
    <header className={headerClass}>
      <MainNav />

      <NavigationMenu className='hidden max-w-30 sm:inline-block'>
        <NavigationMenuList>
          {Object.values(headerNavLinks).map((dialog) => (
            <NavigationMenuItem key={dialog.title}>
              {dialog.toggle ? (
                <>
                  <NavigationMenuTrigger>
                    {dialog.title}
                    <ChevronDown
                      className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
                      aria-hidden='true'
                    />
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
                <Link href={dialog.href}>
                  <NavigationMenuTrigger>{dialog.title}</NavigationMenuTrigger>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div>
        <ThemeToggle />
        <MobileNav />
      </div>
      <Link
        href=''
        className={cn(
          buttonVariants({ variant: 'default' }),
          'hidden sm:inline-block'
        )}
      >
        Contact Us
      </Link>
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
