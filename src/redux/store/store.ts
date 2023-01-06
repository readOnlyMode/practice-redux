import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";
import usersReducer from "../features/users/userSlice";
import postsReducer from "../features/posts/postsReducer";
import { logger } from "../middlewares/logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
