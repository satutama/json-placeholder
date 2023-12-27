import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsState } from 'src/app/features/posts/state/posts.state';
import { Post } from './post/post';
import { PostComponent } from './post/post.component';
import * as PostsActions from './state/posts.actions';
import {
  isErrorSelector,
  isLoadingSelector,
  postsSelector,
} from './state/posts.selector';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public readonly posts$: Observable<Post[]>;
  public readonly isLoading$: Observable<boolean>;
  public readonly isError$: Observable<any>;

  constructor(private store: Store<PostsState>) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.posts$ = this.store.select(postsSelector);
    this.isError$ = this.store.select(isErrorSelector);
  }

  public ngOnInit(): void {
    this.store.dispatch(PostsActions.loadPosts());
  }

  public reloadPage(): void {
    window.location.reload();
  }
}
