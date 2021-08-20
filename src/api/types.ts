export type Author = {
  authorId: string
  lastName: string
  firstName: string
  email: string
}

export type PostMetadata = {
  postId: string
  author: Author
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
