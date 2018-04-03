import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any;
  @Input() index: number; 

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
  }

  onDisLove(post: Post) {
    this.post.loveIts --;
    this.postService.savePosts();
    this.postService.emitPosts();
    // console.log(this.post);
  }

  onLove(post: Post) {
    this.post.loveIts ++;
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  delete(id: number) {
    // console.log('id: ', id);
    this.postService.delPost(id);
  }

}
