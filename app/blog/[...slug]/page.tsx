import { posts } from '#site/content'
import { notFound } from 'next/navigation'
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
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
      <h1 className='mb-2'>{post.title}</h1>
    </article>
  )
}
