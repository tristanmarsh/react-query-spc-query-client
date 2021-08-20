import { PostMetadata } from '../api/types'
import { makeAutoObservable } from 'mobx'

export class AppStore {
  posts: PostMetadata[] = []

  constructor() {
    // individual observable annotations not working in codeandbox
    makeAutoObservable(this)
  }
}
