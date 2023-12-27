import { PostsState } from 'src/app/features/posts/state/posts.state';

export const postsSelector = (state: PostsState) => state.posts.value;
export const isLoadingSelector = (state: PostsState) => state.posts.isLoading;
export const isErrorSelector = (state: PostsState) => state.posts.error;
