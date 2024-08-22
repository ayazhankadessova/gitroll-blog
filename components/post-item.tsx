import Link from 'next/link'
import { cn, formatDate } from '@/lib/utils'
import { Tag } from './tag'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import Image from 'next/image'

interface PostItemProps {
  slug: string
  title: string
  description?: string
  date: string
  tags?: Array<string>
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className='flex-1 flex flex-col gap-2 border-border border-b py-3'>
      <div className='flex justify-between'>
        <div>
          {' '}
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Avatar className='h-5 w-10 mr-2'>
                <AvatarImage src='/gitroll.png' />
              </Avatar>
              <div>
                <p className='text-sm font-bold'>GitRoll</p>
                <time dateTime={date} className='text-sm'>
                  {formatDate(date)}
                </time>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-2xl font-bold'>
              <Link href={'/' + slug}>{title}</Link>
            </h2>
          </div>
          <div className='max-w-none text-muted-foreground'>{description}</div>
          <div className='flex gap-2 mt-2'>
            {tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <div>
          <Image
            src='/gitroll.png'
            alt=''
            className='mb-6 rounded-lg w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full p-4'
            width={800}
            height={300}
          />
        </div>
      </div>
    </article>
  )
}
