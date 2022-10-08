type BasePostKeys = "name" | "title" | "image" | "publishedAt"
type BasePostProps = Record<BasePostKeys, string>

export interface PostPreviewProps extends BasePostProps {
  slug: string
}

export interface RawPostProps extends BasePostProps {
  text: string[]
}

export interface PostProps extends BasePostProps {
  text: string
}
