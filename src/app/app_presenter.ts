import { action, runInAction } from 'mobx'
import { ApiClient } from '../api/api_client'
import { AppStore } from './app_store'

export class AppPresenter {
  constructor(private readonly apiClient: ApiClient) {}

  @action
  async fetchPosts(store: AppStore) {
    store.isFetching = true
    const result = await this.apiClient.findPostsMetadata()
    runInAction(() => {
      store.posts = result
      store.isFetching = false
    })
  }

  @action
  async reloadPosts(store: AppStore) {
    store.posts = []
    this.fetchPosts(store)
  }
}
