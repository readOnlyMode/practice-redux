import {
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";

interface PostsState {
  posts: Post[];
}

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

const initialState: PostsState = {
  posts: [],
};

export const fetchPosts = createAsyncThunk("fetchPost", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
});

const postReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    fetchPosts.fulfilled,
    (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    }
  );
});

export default postReducer;
