import { createReducer, on } from '@ngrx/store';

import { Post } from '../post/post';
import * as PostsActions from './posts.actions';
import { updatePostDisplayIndex } from './util';

export const initialState = {
  isLoading: false,
  value: [] as Post[],
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
  })),
  on(PostsActions.showNextContent, (state, { id }) => {
    const updatedPosts = state.value.map((post) =>
      updatePostDisplayIndex(post, id)
    );

    return {
      ...state,
      value: updatedPosts,
    };
  })
);
