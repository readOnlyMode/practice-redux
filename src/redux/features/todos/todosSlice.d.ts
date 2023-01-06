import { PayloadAction } from "@reduxjs/toolkit";
export interface TodosState {
    todos: Todo[];
}
export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
export declare const fetchTodos: import("@reduxjs/toolkit").AsyncThunk<any, void, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const todosSlice: import("@reduxjs/toolkit").Slice<TodosState, {
    updateTodo(state: import("immer/dist/internal").WritableDraft<TodosState>, { payload: { completed, id } }: PayloadAction<Todo>): void;
    removeTodo(state: import("immer/dist/internal").WritableDraft<TodosState>, { payload: { completed, id } }: PayloadAction<Todo>): void;
}, "todos">;
export declare const updateTodo: import("@reduxjs/toolkit").ActionCreatorWithPayload<Todo, "todos/updateTodo">, removeTodo: import("@reduxjs/toolkit").ActionCreatorWithPayload<Todo, "todos/removeTodo">;
declare const _default: import("redux").Reducer<TodosState, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=todosSlice.d.ts.map