// bookmarkReducer.js

export const BOOKMARK_POST = 'BOOKMARK_POST';
export const UNBOOKMARK_POST = 'UNBOOKMARK_POST';

export const bookmarkPost = (postId) => ({
  type: BOOKMARK_POST,
  payload: postId,
});

export const unbookmarkPost = (postId) => ({
  type: UNBOOKMARK_POST,
  payload: postId,
});

const initialState = {
  bookmarkedPosts: [],
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKMARK_POST:
      return {
        ...state,
        bookmarkedPosts: [...state.bookmarkedPosts, action.payload],
      };
    case UNBOOKMARK_POST:
      return {
        ...state,
        bookmarkedPosts: state.bookmarkedPosts.filter((postId) => postId !== action.payload),
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
