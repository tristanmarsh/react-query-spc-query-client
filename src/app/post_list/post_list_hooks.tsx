import { observer } from 'mobx-react'
import * as React from 'react'
import { PostPreview } from './post_preview'
import { usePostList } from './use_post_list'

export const PostListHooks = observer(() => {
  const { isLoading, error, data: posts } = usePostList()

  return (
    <div className="postList">
      {posts?.map((post) => (
        <PostPreview post={post} key={post.postId} />
      ))}
    </div>
  )
})
