import { AppStore } from './app_store'
import * as React from 'react'
import { Post } from './post/post'

interface AppProps {
  store: AppStore
  posts: AppStore['posts']
}

export function App({ store, posts }: AppProps) {
  console.log('render App')
  React.useEffect(() => console.log('props change'), [posts])
  return (
    <div className="App">
      <h1>React Query queryClient SPC</h1>
      <h2>TypeScript, React, MobX, SPC, React Query</h2>
      {posts?.map((post) => (
        <Post index={post.postId} />
      ))}
    </div>
  )
}
