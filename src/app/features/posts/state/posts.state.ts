import { Post } from '../post/post';

export interface PostsState {
  posts: {
    isLoading: boolean;
    value: Post[];
    error?: any;
  };
}
