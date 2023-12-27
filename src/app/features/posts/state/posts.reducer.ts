import { createReducer, on } from '@ngrx/store';
import { Loadable } from 'src/app/utils/loadable';
import { Post } from '../post/post';
import * as PostsActions from './posts.actions';

export const initialState: Loadable<Post[]> = {
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
