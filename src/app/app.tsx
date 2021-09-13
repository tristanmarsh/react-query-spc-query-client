import { PostListHooks } from './post_list/post_list_hooks'
import { observer } from 'mobx-react'
import * as React from 'react'
import { AppStore } from './app_store'

interface AppProps {
  store: AppStore
  reloadPosts(): void
}

export const App = observer(({ store, reloadPosts }: AppProps) => {
  return (
    <div className="App">
      <h1>React Query queryClient SPC</h1>
      <h2>TypeScript, React, MobX, SPC, React Query</h2>
      <button onClick={reloadPosts}>Reload posts</button>
      {store.isFetching && <p>Loading...</p>}
      <PostListHooks />
    </div>
  )
})
