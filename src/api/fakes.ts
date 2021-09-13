import * as T from './types'

export class Fakes {
  static author: T.Author = {
    authorId: '1',
    firstName: 'Eli',
    lastName: 'Penner',
    email: 'eli.penner@email.com',
  }
  static postVersion: T.PostVersion = {
    version: '2',
    revision: '1',
  }
  static postContent: T.PostContent = {
    postId: '1',
    postTitle: 'Stealing Game Animation Techniques to Engage Users',
    postContent: `
    <p>Today’s websites are overflowing with animations—often too many. They get in the way of the content and slow down our busy users. But at the same time: they’re wonderful. They bring websites to life, are fun to implement and can be incredibly impressive to show off. I think they’re great. Sorry impatient users.</p>
    <p>The way I see it, the problem isn’t necessarily that websites have too many animations, but that the animations don’t vibe with the content they’re promoting. They’re out of place with their subject matter. They feel contrived and provide no additional value.</p>
    <p>This is an article for web developers who want to get fancy-shmancy with the finest animations around, but don’t want to do it at the cost of annoying users. I’ll show you some of the ways I’ve personally used website animations while trying to annoy very few users. You might be thinking that “not annoying users” is a very low bar that I’ve set and well, uh.. hmm.. yes. Good point.</p>
    <p>This is a topic I’ve somewhat stumbled my way into. I work as a web developer for an indie video game publisher called Devolver Digital. I, along with Vieko, make websites for these video games. While I’m primarily a dev, a good chunk of my job is to conceptualize and create designs. I once thought that design didn’t seem that hard, the truth is, as most of you probably know, it’s not that straightforward. It’s really, really hard.</p>
    `,
  }
  static postImage: T.PostImage = {
    url: 'https://source.unsplash.com/800x400/?nature',
  }
  static postMetadata: T.PostMetadata = {
    postId: '1',
    author: Fakes.author,
    edited: new Date('2021-08-18'),
    published: new Date('2021-08-17'),
    version: Fakes.postVersion,
    postImage: Fakes.postImage,
    postContent: Fakes.postContent,
  }
}

export class SeedAuthors {
  static authors: T.Author[] = [
    {
      authorId: '1',
      firstName: 'Eli',
      lastName: 'Penner',
      email: 'eli.penner@email.com',
    },
    {
      authorId: '2',
      firstName: 'Jayne',
      lastName: 'Doe',
      email: 'jayne.doe@email.com',
    },
    {
      authorId: '3',
      firstName: 'Jeff',
      lastName: 'Tree',
      email: 'jeff.tree@email.com',
    },
  ]
}

export class SeedPosts {
  static posts: T.Post[] = [
    {
      id: '1',
      authorId: '1',
      metadata: {
        postId: '1',
        author: Fakes.author,
        edited: new Date('2021-08-18'),
        published: new Date('2021-08-17'),
        version: Fakes.postVersion,
        postImage: Fakes.postImage,
        postContent: Fakes.postContent,
      },
      content: {
        postId: '1',
        postTitle: 'Stealing Game Animation Techniques to Engage Users',
        postContent: `
        <p>Today’s websites are overflowing with animations—often too many. They get in the way of the content and slow down our busy users. But at the same time: they’re wonderful. They bring websites to life, are fun to implement and can be incredibly impressive to show off. I think they’re great. Sorry impatient users.</p>
        <p>The way I see it, the problem isn’t necessarily that websites have too many animations, but that the animations don’t vibe with the content they’re promoting. They’re out of place with their subject matter. They feel contrived and provide no additional value.</p>
        <p>This is an article for web developers who want to get fancy-shmancy with the finest animations around, but don’t want to do it at the cost of annoying users. I’ll show you some of the ways I’ve personally used website animations while trying to annoy very few users. You might be thinking that “not annoying users” is a very low bar that I’ve set and well, uh.. hmm.. yes. Good point.</p>
        <p>This is a topic I’ve somewhat stumbled my way into. I work as a web developer for an indie video game publisher called Devolver Digital. I, along with Vieko, make websites for these video games. While I’m primarily a dev, a good chunk of my job is to conceptualize and create designs. I once thought that design didn’t seem that hard, the truth is, as most of you probably know, it’s not that straightforward. It’s really, really hard.</p>
        `,
      },
    },
    {
      id: '2',
      authorId: '2',
      metadata: {
        postId: '2',
        author: Fakes.author,
        edited: new Date('2021-08-18'),
        published: new Date('2021-08-17'),
        version: Fakes.postVersion,
        postImage: Fakes.postImage,
        postContent: Fakes.postContent,
      },
      content: {
        postId: '2',
        postTitle: 'HTML is Not a Programming Language?',
        postContent: `
        <p>HTML is not a programming language.</p>
        <p>I’ve heard that sentence so many times and it’s tiring. Normally, it is followed by something like, It doesn’t have logic, or, It is not Turing complete,.so… obviously it is not a programming language. Like it’s case-closed and should be the end of the conversation.</p>
        <p>Should it be, though?</p>
        <p>I want to look at typical arguments I hear used to belittle HTML and offer my own rebuttals to show how those claims are not completely correct.</p>
        <p><strong>My goal is not to prove that HTML is or is not a programming language</strong>, but to show that the three main arguments used for claiming it is not are flawed or incorrect, thus invalidating the conclusion from a logical point of view.</p>
        `,
      },
    },
  ]
}

// Need to normalize the data rather than repeating when seeded.
// Each nested property needs to represent a separate resource which can be resolved from an id.

// Store it normalized
// Create a response from querying normalized storage
