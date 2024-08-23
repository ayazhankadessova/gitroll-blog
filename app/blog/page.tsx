'use client'

import React, { useState } from 'react'
import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import {
  sortPosts,
  filterPostsBySearchTerm,
  sortPostsByTitle,
} from '@/lib/utils'
import '@/styles/mdx-style.css'
import { CustomPagination } from '@/components/pagination-query'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const POSTS_PER_PAGE = 5
interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const [searchText, setSearchText] = useState('')
  const [sortMethod, setSortMethod] = useState('createdAt')
  const publishedPosts = filterPostsBySearchTerm(
    posts.filter((post) => post.published),
    searchText
  )
  const sortedPosts =
    sortMethod === 'createdAt'
      ? sortPosts(publishedPosts)
      : sortPostsByTitle(publishedPosts)
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE)

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  )

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value)
  }

  const handleSortMethodChange = (value: string) => {
    setSortMethod(value)
  }

  return (
    <div className='container max-w-4xl py-2 lg:py-3 px-0'>
      <div className='mb-6 pr-20 mr-20 '>
        <Input
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div className='flex justify-between'>
        <h1 className='font-black text-3xl lg:text-4xl'>Articles</h1>
        <Select onValueChange={handleSortMethodChange}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Sort By' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              <SelectItem value='createdAt'>Created At</SelectItem>
              <SelectItem value='title'>Title</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <hr className='mt-4'></hr>
      {displayPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {displayPosts.map((post) => {
            const { slug, date, title, description, tags } = post
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No articles yet...</p>
      )}
      <CustomPagination totalPages={totalPages} className='mt-4' />
    </div>
  )
}
