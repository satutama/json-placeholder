import { createAction, props } from '@ngrx/store';
import { Post } from '../components/post/post';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(
  '[Posts] Load Posts Failure',
  props<{ error: any }>()
);

export const showNextContent = createAction(
  '[Post] Update Post',
  props<{ id: number }>()
);
