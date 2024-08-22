import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn, sortPosts } from '@/lib/utils'
import { posts } from '#site/content'
import Link from 'next/link'
import { PostItem } from '@/components/post-item'

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)
  return (
    <>
      <section className='space-y-2 pb-6 pt-4 md:pb-10 md:mt-2'>
        <div className='container flex flex-col gap-4 text-center'>
          <div className='flex flex-col gap-4 justify-center sm:flex-row'>
            <Link
              href='/blog'
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'w-full sm:w-fit'
              )}
            >
              View GitRoll blog
            </Link>
          </div>
        </div>
      </section>
      <section className='container max-w-4xl py-0 lg:py-0 flex flex-col space-y-6'>
        <h2 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Latest Articles
        </h2>
        <ul className='flex flex-col'>
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className='first:border-t first:border-border'
                >
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </>
  )
}
