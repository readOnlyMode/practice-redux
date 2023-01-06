import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface TodosState {
  todos: Todo[];
}
export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const initialState: TodosState = { todos: [] };

export const fetchTodos = createAsyncThunk("todos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  return response.json();
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTodo(state, { payload: { completed, id } }: PayloadAction<Todo>) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index >= 0) {
        const todo = state.todos[index];
        todo.completed = completed;
      }
    },

    removeTodo(state, { payload: { completed, id } }: PayloadAction<Todo>) {
      const index = state.todos.findIndex((todo) => todo.id === id);

      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.todos = payload;
    });
  },
});

export const { updateTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
