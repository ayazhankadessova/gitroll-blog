'use client'

import React, { useState } from 'react'
import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import { sortPosts, filterPostsBySearchTerm } from '@/lib/utils'
import '@/styles/mdx-style.css'
import { CustomPagination } from '@/components/pagination-query'
import { Input } from '@/components/ui/input'

const POSTS_PER_PAGE = 5
interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const [searchText, setSearchText] = useState('')
  const publishedPosts = filterPostsBySearchTerm(
    posts.filter((post) => post.published),
    searchText
  )
  const sortedPosts = sortPosts(publishedPosts)
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

  return (
    <div className='container max-w-4xl py-2 lg:py-3 px-0'>
      <div className='mb-4 pr-20 mr-20 '>
        <Input
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            Articles
          </h1>
        </div>
      </div>
      <hr className='mt-8'></hr>
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
