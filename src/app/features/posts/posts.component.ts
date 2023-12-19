import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from 'src/app/features/posts/post';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  public readonly posts$: Observable<Post[] | undefined>;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {
    this.posts$ = this.jsonPlaceholderService.getPosts();
  }
}
