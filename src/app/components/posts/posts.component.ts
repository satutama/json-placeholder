import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectError,
  selectLoading,
  selectPosts,
} from 'src/app/state/posts.selector';
import { AppState } from 'src/app/state/posts.state';
import * as PostsActions from '../../state/posts.actions';
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
  public readonly posts$: Observable<Post[]> = this.store.select(selectPosts);
  public readonly isLoading$: Observable<boolean> =
    this.store.select(selectLoading);
  public readonly isError$: Observable<any> = this.store.select(selectError);

  constructor(private store: Store<AppState>) {}

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
