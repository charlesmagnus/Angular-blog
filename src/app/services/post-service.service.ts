import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { DataSnapshot } from 'firebase/database';
 
@Injectable()
export class PostServiceService {

	postSubject = new Subject<Post[]>();

	private posts: Post[] = []

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }


  delPost(id: number) {
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts).then(() =>{
      console.log('Saved');
    },
    (error) => {
      console.log('Err: ', error);
    })
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data: DataSnapshot) =>{
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  lovePost(post: Post) {
    post.loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  notLovePost(post: Post) {
    post.loveIts--;
    this.savePosts();
    this.emitPosts();
  }

}
