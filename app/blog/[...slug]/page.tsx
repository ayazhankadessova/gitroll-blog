import { posts } from '#site/content'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-components'
import { ChevronLeft } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SharePost } from '@/components/share-post'

// import '@/styles/mdx.css'
interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

// if slug is same as slugAsParams of one of the pages
export async function generateStaticParams(): Promise<
  { slug: string[]; revalidate?: number }[]
> {
  console.log('generating static params')
  return posts.map((post) => ({
    slug: post.slugAsParams.split('/'),
    revalidate: 7200, // Revalidate the page every 60 seconds
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className='container max-w-xl lg:max-w-[850px] mx-auto px-4 py-6 md:px-6'>
      <div className='flex items-start justify-between'>
        <Link
          href='/blog'
          className={cn(
            buttonVariants({
              variant: 'ghost',
            }),
            'ml-0 py-0 px-0'
          )}
        >
          <ChevronLeft className='h-4 w-4' />
          BACK
        </Link>
        <SharePost />
      </div>
      <article className='prose prose-img:rounded-xl max-w-none mt-2'>
        <h1 className='mb-2'>{post.title}</h1>
        {post.description ? (
          <p className='text-xl mt-0 text-muted-foreground'>
            {post.description}
          </p>
        ) : null}
        <hr className='my-4' />
        <MDXContent code={post.body} />
      </article>
    </div>
  )
}
