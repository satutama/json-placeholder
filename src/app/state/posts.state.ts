import { Post } from '../components/post/post';

export interface PostsState {
  posts: {
    isLoading: boolean;
    value: Post[];
    error: any;
  };
}
