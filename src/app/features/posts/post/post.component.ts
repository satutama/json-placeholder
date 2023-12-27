import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostsActions from '../state/posts.actions';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() id!: number;
  @Input() displayedContent!: string | number;
  constructor(private store: Store) {}

  public nextContent(): void {
    this.store.dispatch(PostsActions.showNextContent({ id: this.id }));
  }
}
