import React from "react";
import { Routes, Route } from "react-router-dom";
import { Posts } from "../pages/Posts/Posts";
import { Counter } from "../pages/Counter/Counter";
import { Todos } from "../pages/Todos/Todos";
import { Todo } from "../pages/Todo/Todo";
import { Users } from "../pages/Users/Users";
import { Header } from "./Header/Header";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/todos" element={<Todos />}>
          <Route index path="/todos/:id" element={<Todo />}></Route>
        </Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/*" element={<Posts />}></Route>
      </Routes>
    </>
  );
};
