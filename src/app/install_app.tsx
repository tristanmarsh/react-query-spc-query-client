import { autorun } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import { ApiClient } from '../api/api_client'
import { App } from './app'
import { AppPresenter } from './app_presenter'
import { AppStore } from './app_store'
import { QueryClient } from 'react-query'

export function installApp(apiClient: ApiClient, queryClient: QueryClient) {
  const store = new AppStore()
  const presenter = new AppPresenter(apiClient, queryClient)
  const fetchPosts = () => presenter.fetchPosts(store)
  const reloadPosts = () => presenter.reloadPosts(store)

  autorun(() => {
    console.log(store)
  })

  return observer(() => {
    React.useEffect(() => {
      console.log('mount')
      fetchPosts()
    }, [])

    return (
      <App
        apiClient={apiClient}
        store={store}
        posts={store.posts}
        reloadPosts={reloadPosts}
      />
    )
  })
}
