import * as T from './types'

type FindPostsMetadataResponse = T.PostMetadata[]
type GetPostMetadata = T.PostMetadata
export type GetPostContentRequest = {
  postId: string
}
type GetPostContent = T.PostContent
export type GetAuthorRequest = {
  authorId: string
}
type getAuthorResponse = T.Author

export interface ApiClient {
  findPostsMetadata(): Promise<FindPostsMetadataResponse>
  getPostMetadata(): Promise<GetPostMetadata>
  setPostMetadata(): Promise<unknown>
  getPostContent(req: GetPostContentRequest): Promise<GetPostContent>
  setPostContent(): Promise<unknown>
  getAuthor(req: GetAuthorRequest): Promise<getAuthorResponse>
}
