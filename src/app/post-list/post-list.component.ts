import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    {
      title: 'Article n°1',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus libero repudiandae corrupti pariatur eligendi ex laudantium optio praesentium nisi, eius eos doloremque rerum ipsam labore, numquam sed, et facilis.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Article n°2',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus libero repudiandae corrupti pariatur eligendi ex laudantium optio praesentium nisi, eius eos doloremque rerum ipsam labore, numquam sed, et facilis.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Article n°3',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus libero repudiandae corrupti pariatur eligendi ex laudantium optio praesentium nisi, eius eos doloremque rerum ipsam labore, numquam sed, et facilis.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
