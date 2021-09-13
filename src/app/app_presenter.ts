import { action, runInAction } from 'mobx'
import { ApiClient } from '../api/api_client'
import { AppStore } from './app_store'
import { QueryClient } from 'react-query'

export class AppPresenter {
  constructor(
    private readonly apiClient: ApiClient,
    private readonly queryClient: QueryClient
  ) {}

  // Old lame way
  // @action
  // async fetchPosts(store: AppStore) {
  //   store.isFetching = true
  //   const result = await this.apiClient.findPostsMetadata()
  //   runInAction(() => {
  //     store.posts = result
  //     store.isFetching = false
  //   })
  // }

  // // New cool cached way
  @action
  async fetchPosts(store: AppStore) {
    runInAction(() => {
      store.isFetching = true
    })
    const result = await this.queryClient.fetchQuery('posts', () =>
      this.apiClient.findPostsMetadata()
    )
    runInAction(() => {
      store.posts = result
      store.isFetching = false
    })
  }

  @action
  reloadPosts(store: AppStore) {
    store.posts.slice(0, 0)
    this.fetchPosts(store)
  }
}
