import { clientConfig } from "@/lib/client"
import type { PostProps, PostPreviewProps, RawPostProps } from "@/types"
import type { SanityClient } from "@sanity/client"
import sanityClient from "@sanity/client"

function getDateFormat(date: Date) {
  const dateString = date.toDateString()
  return dateString.slice(3)
}

export async function getBlogLinks(client: SanityClient) {
  const query = `*[_type == 'post'].slug.current`
  const slugs: string[] = await client.fetch(query)
  return slugs
}

export async function getPostsPreview(client: SanityClient) {
  const query = `*[_type == 'post'] | order(publishedAt desc) {
    title, publishedAt,
    "slug": slug.current,
    "name": author->name,
    "text": body[].children[].text,
    "image": mainImage.asset->url
  }`
  return client.fetch(query).then((posts: PostPreviewProps[]) => {
    const transformedPosts: PostPreviewProps[] = posts.map((singlePost) => {
      const date = new Date(singlePost.publishedAt)
      const publishedAt = getDateFormat(date)
      return { ...singlePost, publishedAt }
    })
    return transformedPosts
  })
}

export async function getPost(client: SanityClient, slug: string) {
  const query = `*[_type == 'post' && slug.current == '${slug}'][0]{
    title, publishedAt,
    "name": author->name,
    "text": body[].children[].text,
    "image": mainImage.asset->url
  }`
  const post: PostProps = await client
    .fetch(query)
    .then((post: RawPostProps) => {
      const text = post.text.join("\n")
      const date = new Date(post.publishedAt)
      const publishedAt = getDateFormat(date)
      return { ...post, text, publishedAt }
    })
  return post
}

export function getSanityClient() {
  const client = sanityClient(clientConfig)
  return client
}
