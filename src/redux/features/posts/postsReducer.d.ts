interface PostsState {
    posts: Post[];
}
export interface Post {
    userId: string;
    id: number;
    title: string;
    body: string;
}
export declare const fetchPosts: import("@reduxjs/toolkit").AsyncThunk<any, void, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
declare const postReducer: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<PostsState>;
export default postReducer;
//# sourceMappingURL=postsReducer.d.ts.map