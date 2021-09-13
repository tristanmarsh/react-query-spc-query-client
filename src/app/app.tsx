import { observer } from 'mobx-react'
import * as React from 'react'
import { Post } from './post/post'
import { PostMetadata } from '../api/types'
import { AppStore } from './app_store'
import { ApiClient } from '../api/api_client'
import { PostList } from './post_list/post_list'
interface AppProps {
  apiClient: ApiClient
  store: AppStore
  posts: PostMetadata[]
  reloadPosts(): void
}

export const App = observer(
  ({ apiClient, store, posts, reloadPosts }: AppProps) => {
    return (
      <div className="App">
        <h1>React Query queryClient SPC</h1>
        <h2>TypeScript, React, MobX, SPC, React Query</h2>
        <button onClick={reloadPosts}>Reload posts</button>
        {store.isFetching && <p>Loading...</p>}
        <PostList posts={posts} />
        {/* {posts?.map((post) => (
          <Post apiClient={apiClient} post={post} key={post.postId} />
        ))} */}
      </div>
    )
  }
)
