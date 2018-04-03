import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostServiceService } from '../services/post-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

	postForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private postService: PostServiceService) { }

  ngOnInit() {
  	this.postForm = this.fb.group({
  		'title': ['', Validators.required],
  		'content': ['', Validators.required],
      'loveIts': [0]
  	})
  }

  onSubmitForm(data: Post) {
  	const newPost = new Post();
  	newPost.title = data.title;
  	newPost.content = data.content;
  	newPost.loveIts = data.loveIts;
  	// console.log('data: ', newPost)
  	this.postService.addPost(newPost)
  	this.router.navigate(['/posts']);
  }

}
