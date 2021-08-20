import { runInAction } from 'mobx'
import { ApiClient } from '../api/api_client'
import { AppStore } from './app_store'

export class AppPresenter {
  constructor(private readonly apiClient: ApiClient) {}

  async fetchPosts(store: AppStore) {
    const result = await this.apiClient.findPostsMetadata()
    runInAction(() => (store.posts = result))
    console.log(store.posts)
    console.log(result)
  }
}
