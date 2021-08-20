import { observer } from 'mobx-react'
import * as React from 'react'
import { Post } from './post/post'
import { PostMetadata } from '../api/types'
import { AppStore } from './app_store'
import { ApiClient } from '../api/api_client'

interface AppProps {
  apiClient: ApiClient
  store: AppStore
  posts: PostMetadata[]
}

export const App = observer(({ apiClient, store, posts }: AppProps) => {
  console.log('render App')
  React.useEffect(() => console.log('props change'), [posts])
  return (
    <div className="App">
      <h1>React Query queryClient SPC</h1>
      <h2>TypeScript, React, MobX, SPC, React Query</h2>
      {posts?.map((post) => (
        <Post apiClient={apiClient} post={post} key={post.postId} />
      ))}
    </div>
  )
})
