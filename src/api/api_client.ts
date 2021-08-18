import * as T from './types'

type FindPostsResponse = T.PostMetadata[]
type GetPostMetadata = T.PostMetadata
type GetPostContent = T.PostContent

export interface ApiClient {
  constructor(syntheticDelay: () => Promise<void>): void
  findPosts(): Promise<FindPostsResponse>
  getPostMetadata(): Promise<GetPostMetadata>
  setPostMetadata(): Promise<unknown>
  getPostContent(): Promise<GetPostContent>
  setPostContent(): Promise<unknown>
}
