import { ApiClient } from '../api/api_client'
import { AppStore } from './app_store'

export class AppPresenter {
  constructor(private readonly apiClient: ApiClient) {}
  async fetchPosts(store: AppStore): Promise<void> {
    const result = await this.apiClient.findPosts()
    store.posts = result
  }
}
