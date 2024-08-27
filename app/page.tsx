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
        <div className='container flex max-w-screen-2xl flex-col gap-4 text-center'>
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
      <section className='container flex max-w-screen-2xl flex-col space-y-6'>
        <h3 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl'>
          Latest Articles
        </h3>
        <ul className='flex flex-col'>
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className='first:border-t first:border-border'
                >
                  <PostItem post={post} />
                </li>
              )
          )}
        </ul>
      </section>
    </>
  )
}
