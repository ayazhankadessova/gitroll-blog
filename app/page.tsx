import { buttonVariants } from '@/components/ui/button'
import { cn, sortPosts } from '@/lib/utils'
import { posts } from '#site/content'
import Link from 'next/link'
import { PostItem } from '@/components/post-item'

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)
  return (
    <div className='container max-w-4xl py-2 lg:py-3 px-0'>
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
      <div className='flex justify-between'>
        <h1 className='font-black text-3xl lg:text-4xl'>Latest Articles</h1>
      </div>
      <hr className='mt-4'></hr>

      {latestPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {latestPosts.map((post) => {
            return (
              <li key={post.slug}>
                <PostItem post={post} />
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
