import * as T from './types'
import {
  GetPostContentRequest,
  ApiClient,
  GetAuthorRequest,
} from './api_client'
import { SyntheticDelay } from './synthetic_delay'
import { Fakes, SeedAuthors, SeedPosts } from './fakes'
import { Author } from './types'

class ApiClientStore {
  posts: T.Post[] = []
  authors: T.Author[] = []
}

class MockApiClient implements ApiClient {
  private store: ApiClientStore = new ApiClientStore()

  private seedStore() {
    this.store.authors = SeedAuthors.authors
    this.store.posts = SeedPosts.posts
  }

  constructor(private readonly syntheticDelay: SyntheticDelay) {
    this.seedStore()
  }

  async findPostsMetadata() {
    await this.syntheticDelay()
    console.log('mock findPosts')
    return this.store.posts.map((x) => x.metadata)
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
