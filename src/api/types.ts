export type PostMetadata = {
  postId: string
  author: string
  published: Date
  edited: Date
  version: PostVersion
}

// post version uses version for publish events
// revision for client side sync-pending revisions
export type PostVersion = {
  version: string
  revision: string
}

export type PostContent = {
  postId: string
  postContent: string
}
