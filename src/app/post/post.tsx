import { observer } from 'mobx-react'
import * as React from 'react'
import { PostMetadata } from '../../api/types'
import { ApiClient, GetPostContentRequest } from '../../api/api_client'
import { PostContent } from '../../api/types'

interface PostProps {
  apiClient: ApiClient
  post: PostMetadata
}

export const Post = observer(({ apiClient, post }: PostProps) => {
  const [postContent, setPostContent] = React.useState<PostContent>()

  React.useEffect(() => {
    async function fetchPostContent() {
      const getPostRequest: GetPostContentRequest = { postId: post.postId }
      const content = await apiClient.getPostContent(getPostRequest)
      setPostContent(content)
    }
    fetchPostContent()
  }, [apiClient, post.postId])

  return (
    <div className="post">
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <pre>{JSON.stringify(postContent, null, 2)}</pre>
    </div>
  )
})
