import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostServiceService } from './services/post-service.service';
import { Subscription } from 'rxjs/Subscription';
import { Post } from './post';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  songs = [
    {id: 1, name: 'Lonlon', artiste: 'Eric MC'},
    {id: 2, name: 'Solo', artiste: 'DJ Zola'},
    {id: 3, name: 'Papou', artiste: 'Oledjimi'}
  ];

  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  posts: Post[];
  postSubscription: Subscription;

  postForm: FormGroup;

  constructor(private postService: PostServiceService, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: [0, Validators.required],
      hobbies: this.fb.array([])
      // created_at: [new Date(), Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    // this.func1();
    this.postSubscription = this.postService.postSubject.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postService.emitPostSubject();

  }

  onSubmitForm(data: any) {
    data.created_at = new Date();
    data.hobbies ? data.hobbies : [];
    console.log(data)
  }

  getHobbies():FormArray {
    return this.postForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.fb.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }


  onDisLove() {
    if(confirm('Etes-vous sûr de vouloire supprimer cet article ?')) {
      this.postService.notLoveAll();
    } else {
      return null;
    }
  }

  onLove() {
    this.postService.loveAll();
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  /*func() {
    const mapped = this.songs.map((song, index) => {
      const {artiste, ...rest} = song;

      return {
        ...rest,
        score: '1' + index,
        spotifyUrl: `https://spotify.com/songs/${song.name}`
      };
    });

    console.log('map: ', mapped);
  }*/

  /*func1() {
    const arr = this.data.filter((value, index, array) => {
      return value !== 5 && value < 5;
    });
    console.log(arr);
  }*/

}
