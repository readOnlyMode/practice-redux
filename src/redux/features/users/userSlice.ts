import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type Users = User[];

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UsersState {
  users: Users;
}
export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const respose = await fetch("https://jsonplaceholder.typicode.com/users");

  return respose.json();
});

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload }: PayloadAction<Users>) => {
        state.users = payload;
      }
    );
  },
});

export default usersSlice.reducer;
