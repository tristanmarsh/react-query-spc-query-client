import * as React from 'react'
import { ApiClient } from '../api/api_client'
import { App } from './app'
import { AppPresenter } from './app_presenter'
import { AppStore } from './app_store'

export function installApp(apiClient: ApiClient) {
  const store = new AppStore()
  const presenter = new AppPresenter(apiClient)
  const fetchPosts = presenter.fetchPosts(store)

  return () => {
    React.useEffect(() => () => fetchPosts(), [])
    return <App store={store} posts={store.posts} />
  }
}
