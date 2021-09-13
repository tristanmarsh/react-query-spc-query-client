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
      <div className="postTitle">
        <h2>{postContent?.postTitle}</h2>
      </div>
      <div className="postAuthor">
        <strong>
          {post.author.firstName} {post.author.lastName}
        </strong>
        <br />
        {post.author.email}
      </div>

      <div className="postImage">
        <img src={post.postImage.url} alt={`Title for ${post.postId}`} />
      </div>

      <div className="postMetadata">
        <div className="postMetadataPublished">
          <small>
            Published {post.published.toLocaleString().slice(0, 10)}
          </small>
        </div>
        <div className="postMetadataUpdated">
          <small>Updated {post.edited.toLocaleString().slice(0, 10)}</small>
        </div>
      </div>

      <div className="postContent">
        <div
          dangerouslySetInnerHTML={{ __html: postContent?.postContent || '' }}
        ></div>
      </div>
    </div>
  )
})
