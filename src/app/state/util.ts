import { PostResponse } from 'src/app/services/json-placeholder.service';
import { Post } from '../components/post/post';

export const INITIAL_DISPLAY_INDEX = 0;

export const parsePostsResponse = (postsResponse: PostResponse[]): Post[] => {
  return postsResponse.map((post: PostResponse) => ({
    ...post,
    displayIndex: INITIAL_DISPLAY_INDEX,
  }));
};

export const getUpdatedDisplayIndex = (post: Post): number => {
  let updatedIndex = post.displayIndex + 1;
  if (updatedIndex >= Object.keys(post).length - 1) {
    updatedIndex = INITIAL_DISPLAY_INDEX;
  }

  return updatedIndex;
};

export const updateDisplayIndex = (post: Post): Post => {
  let updatedIndex = post.displayIndex + 1;
  if (updatedIndex >= Object.keys(post).length - 1) {
    updatedIndex = INITIAL_DISPLAY_INDEX;
  }

  const updatedPost = {
    ...post,
    displayIndex: updatedIndex,
  };

  return updatedPost;
};
