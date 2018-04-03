import { Component, OnInit } from '@angular/core';
import { PostServiceService } from './services/post-service.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private postService: PostServiceService) {
    const config = {
      apiKey: "AIzaSyBRp-anpk97NINGwxwDJUAyhQOli0GgMDU",
      authDomain: "fir-967bd.firebaseapp.com",
      databaseURL: "https://fir-967bd.firebaseio.com",
      projectId: "fir-967bd",
      storageBucket: "fir-967bd.appspot.com",
      messagingSenderId: "1090430643726"
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {

  }
}
