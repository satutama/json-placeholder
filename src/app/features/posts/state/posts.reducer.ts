import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './posts.actions';

export const initialState = {
  isLoading: false,
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    isLoading: false,
    value: posts,
  })),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
