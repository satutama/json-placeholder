import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import { Loadable } from 'src/app/utils/loadable';
import { Post } from './post/post';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  public readonly loadablePosts$: Observable<Loadable<Post[]>>;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {
    this.loadablePosts$ = this.jsonPlaceholderService.getPosts();
  }

  public reloadPage(): void {
    window.location.reload();
  }
}
