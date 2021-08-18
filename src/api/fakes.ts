import * as T from './types'

export class Fakes {
  static postVersion: T.PostVersion = {
    version: '2',
    revision: '1',
  }
  static postContent: T.PostContent = {
    postId: '1',
    postContent: 'cool post',
  }
  static postMetadata: T.PostMetadata = {
    postId: '1',
    author: 'Bilbo Baggins',
    edited: new Date('2021-08-18'),
    published: new Date('2021-08-17'),
    version: Fakes.postVersion,
  }
}
