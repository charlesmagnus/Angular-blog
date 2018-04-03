import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postSubscription: Subscription;

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.postService.getPosts()
    this.postSubscription = this.postService.postSubject.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
