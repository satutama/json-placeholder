import { createSelector } from '@ngrx/store';
import { AppState, PostsState } from 'src/app/state/posts.state';
import { Post } from '../components/post/post';

export const selectPostsFeature = (state: AppState) => state.posts;

export const selectPosts = createSelector(
  selectPostsFeature,
  (state: PostsState) => Object.values(state.entities) as Post[]
);

export const selectLoading = createSelector(
  selectPostsFeature,
  (state: PostsState) => !!state.isLoading
);

export const selectError = createSelector(
  selectPostsFeature,
  (state: PostsState) => !!state.isError
);
