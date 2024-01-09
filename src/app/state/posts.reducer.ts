import { createReducer, on } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { adapter, initialState } from './posts.state';
import { updateDisplayIndex } from './util';

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    adapter.addMany(posts, { ...state, isLoading: false })
  ),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    isError: true,
  })),
  on(PostsActions.showNextContent, (state, { id }) => {
    let post = state.entities[id];

    if (post) {
      return adapter.updateOne(
        {
          id,
          changes: updateDisplayIndex(post),
        },
        state
      );
    }

    return {
      ...state,
    };
  })
);
