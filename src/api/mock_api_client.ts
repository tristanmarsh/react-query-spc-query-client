import { ApiClient } from './api_client'
import { SyntheticDelay } from './synthetic_delay'
import { Fakes } from './fakes'

class MockApiClient implements ApiClient {
  private store = {}

  constructor(private readonly syntheticDelay: SyntheticDelay) {}

  async findPosts() {
    await this.syntheticDelay()
    console.log('mock findPosts')
    return [Fakes.postMetadata]
  }
  async getPostMetadata() {
    await this.syntheticDelay()
    return Fakes.postMetadata
  }
  setPostMetadata(): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
  async getPostContent() {
    await this.syntheticDelay()
    return Fakes.postContent
  }
  setPostContent(): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
}

export function installMockApiClient(syntheticDelay: SyntheticDelay) {
  return new MockApiClient(syntheticDelay)
}
