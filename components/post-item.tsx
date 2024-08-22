import Link from 'next/link'
import { cn, formatDate } from '@/lib/utils'
import { Tag } from './tag'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
    <article className='flex flex-col gap-2 border-border border-b py-3'>
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
      <div className='flex gap-2'>
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
    </article>
  )
}
