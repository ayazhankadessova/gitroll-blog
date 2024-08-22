import { Calendar } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn, formatDate } from '@/lib/utils'
import { Tag } from './tag'
import React from 'react'

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
        <dl>
          <dd className='text-sm sm:text-base font-medium flex items-center gap-1'>
            <Calendar className='h-4 w-4' />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
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
