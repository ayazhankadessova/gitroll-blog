import React from 'react'
import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import { sortPosts } from '@/lib/utils'
import '@/styles/mdx-style.css'

const POSTS_PER_PAGE = 2
interface BlogPageProps {
  filterParams: {
    page?: string
  }
}

export default async function BlogPage({ filterParams }: BlogPageProps) {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))
  const currentPage = Number(filterParams?.page) || 1

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1) + 1,
    currentPage
  )

  return (
    <div className='container max-w-4xl py-2 lg:py-3 px-0'>
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
    </div>
  )
}
