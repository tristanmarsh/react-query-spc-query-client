import {
  GetPostContentRequest,
  ApiClient,
  GetAuthorRequest,
} from './api_client'
import { SyntheticDelay } from './synthetic_delay'
import { Fakes } from './fakes'
import { Author } from './types'

class MockApiClient implements ApiClient {
  private store = {}

  constructor(private readonly syntheticDelay: SyntheticDelay) {}
  async findPostsMetadata() {
    await this.syntheticDelay()
    console.log('mock findPosts')
    return [Fakes.postMetadata]
  }

  async getPostMetadata() {
    await this.syntheticDelay()
    console.log('mock getPostMetadata')
    return Fakes.postMetadata
  }

  setPostMetadata(): Promise<unknown> {
    console.log('mock setPostMetadata')
    throw new Error('Method not implemented.')
  }

  async getPostContent(req: GetPostContentRequest) {
    await this.syntheticDelay()
    console.log('mock getPostContent')
    return Fakes.postContent
  }

  setPostContent(): Promise<unknown> {
    console.log('mock setPostContent')
    throw new Error('Method not implemented.')
  }

  async getAuthor(req: GetAuthorRequest): Promise<Author> {
    await this.syntheticDelay()
    console.log('mock getAuthor')
    return Fakes.author
  }
}

export function installMockApiClient(syntheticDelay: SyntheticDelay) {
  return new MockApiClient(syntheticDelay)
}
