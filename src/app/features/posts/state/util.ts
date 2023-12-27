import { PostResponse } from 'src/app/services/json-placeholder.service';
import { Post } from '../post/post';

const INITIAL_DISPLAY_INDEX = 0;
export const parsePostsResponse = (postsResponse: PostResponse[]): Post[] => {
  return postsResponse.map((post: PostResponse) => ({
    ...post,
    displayIndex: INITIAL_DISPLAY_INDEX,
  }));
};

export const updatePostDisplayIndex = (post: Post, id: number) => {
  if (post.id === id) {
    let updatedIndex = post.displayIndex + 1;
    if (updatedIndex >= Object.keys(post).length - 1) {
      updatedIndex = INITIAL_DISPLAY_INDEX;
    }

    return {
      ...post,
      displayIndex: updatedIndex,
    };
  }

  return post;
};
