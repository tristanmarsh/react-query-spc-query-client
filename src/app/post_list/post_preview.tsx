import { observer } from 'mobx-react'
import { useState } from 'react'
import { PostMetadata } from '../../api/types'
import { Post } from '../post/post'

interface PostProps {
  post: PostMetadata
}

export const PostPreview = observer(({ post }: PostProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>()

  return (
    <div className="post postPreview">
      <div className="postTitle">
        <h2>{post?.postContent?.postTitle}</h2>
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
      <button onClick={() => setIsOpen((x) => !x)}>
        {isOpen ? 'close' : 'open'} post
      </button>
      {isOpen && <Post postId={post.postId} />}
    </div>
  )
})
