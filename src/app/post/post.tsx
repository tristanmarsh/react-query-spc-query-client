import { observer } from 'mobx-react'
import { usePost } from '../post_list/use_post'

interface PostProps {
  postId: string
}

export const Post = observer(({ postId }: PostProps) => {
  const { isLoading, data: post } = usePost(postId)

  if (isLoading) return <p>Loading...</p>

  // React.useEffect(() => {
  //   async function fetchPostContent() {
  //     const getPostRequest: GetPostContentRequest = { postId: post.postId }
  //     const content = await apiClient.getPostContent(getPostRequest)
  //     setPostContent(content)
  //   }
  //   fetchPostContent()
  // }, [apiClient, post.postId])

  return (
    <div className="post">
      <div className="postTitle">
        <h2>{post?.postTitle}</h2>
      </div>
      <div className="postAuthor">
        <strong>
          {/* {post?.postContent?.author?.firstName}{' '} */}
          {/* {post?.postContent?.author?.lastName} */}
        </strong>
        <br />
        {/* {post?.postContent.author?.email} */}
      </div>

      <div className="postImage">
        {/* <img src={post.postImage.url} alt={`Title for ${post.postId}`} /> */}
      </div>

      <div className="postMetadata">
        <div className="postMetadataPublished">
          <small>
            {/* Published {post.published.toLocaleString().slice(0, 10)} */}
          </small>
        </div>
        <div className="postMetadataUpdated">
          {/* <small>Updated {post.edited.toLocaleString().slice(0, 10)}</small> */}
        </div>
      </div>

      <div className="postContent">
        <div
          dangerouslySetInnerHTML={{
            __html: post?.postContent || '',
          }}
        ></div>
      </div>
    </div>
  )
})
