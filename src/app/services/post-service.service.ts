import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class PostServiceService {

	postSubject = new Subject<Post[]>();
	// https://fir-967bd.firebaseio.com/

	private posts: Post[] = [
		{
			title: 'Post One',
			content: 'This is post one',
			loveIts: 1,
			created_at: new Date()
		},
		{
			title: 'Post Two',
			content: 'This is post two',
			loveIts: 0,
			created_at: new Date()
		},
		{
			title: 'Post Three',
			content: 'This is post three',
			loveIts: 0,
			created_at: new Date()
		}
	]

  constructor(private http: HttpClient) { }

  savePost() {
  	this.http
  	.post('https://fir-967bd.firebaseio.com/posts.json', this.posts)
  	.subscribe(() => {
  		console.log('Enregistrement succès!')
  	},
  	(error) => {
  		console.log('Error: ', error);
  	})
  }

  emitPostSubject() {
  	this.postSubject.next(this.posts.slice());
  }

  loveAll() {
  	for(let post of this.posts) {
  		post.loveIts = 1;
  	}
  	this.emitPostSubject();
  }

  notLoveAll() {
  	for(let post of this.posts) {
  		post.loveIts = 0;
  	}
  	this.emitPostSubject();
  }

  loveOne(id: number) {
  	this.posts[id].loveIts = 1;
  	this.emitPostSubject();
  }

  notLoveOne(id: number) {
  	this.posts[id].loveIts = 0;
  	this.emitPostSubject();
  }

}
