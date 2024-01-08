import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsState } from 'src/app/state/posts.state';
import * as PostsActions from '../../state/posts.actions';
import * as PostsSelectors from '../../state/posts.selector';
import { Post } from '../post/post';
import { PostComponent } from '../post/post.component';

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
    this.isLoading$ = this.store.select(PostsSelectors.isLoadingSelector);
    this.posts$ = this.store.select(PostsSelectors.postsSelector);
    this.isError$ = this.store.select(PostsSelectors.isErrorSelector);
  }

  public ngOnInit(): void {
    this.store.dispatch(PostsActions.loadPosts());
  }

  public nextContent(id: number): void {
    this.store.dispatch(PostsActions.showNextContent({ id }));
  }

  public reloadPage(): void {
    window.location.reload();
  }
}
