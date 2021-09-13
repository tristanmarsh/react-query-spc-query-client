import { observer } from 'mobx-react'
import * as React from 'react'
import { PostPreview } from './post_preview'
import { PostMetadata } from '../../api/types'

interface AppProps {
  posts: PostMetadata[]
}

export const PostList = observer(({ posts }: AppProps) => {
  return (
    <div className="postList">
      {posts?.map((post) => (
        <PostPreview post={post} key={post.postId} />
      ))}
    </div>
  )
})
