import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

import { PostServiceService } from './services/post-service.service';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: '', component: PostListComponent },
  { path: 'new', component: NewPostComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
