import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import "./todo.scss";


export const Todo: React.FC = () => {
  const { id } = useParams();
  let todo;
  if (id) {
    todo = useAppSelector((state) => state.todos.todos).find(
      (todo) => todo.id === Number(id)
    );
  }

  return (
    <>{<h5 className="todo">{todo ? todo.title : "TODO is not found"}</h5>}</>
  );
};
