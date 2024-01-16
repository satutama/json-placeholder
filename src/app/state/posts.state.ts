import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Post } from '../components/post/post';

export interface AppState {
  posts: PostsState;
}

export interface PostsState extends EntityState<Post> {
  isLoading: boolean;
  isError: boolean;
}

export const adapter = createEntityAdapter<Post>();

export const initialState: PostsState = adapter.getInitialState({
  isLoading: false,
  isError: false,
});
