import React, { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { fetchTodos } from "../../redux/features/todos/todosSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { Card, Stack, Button } from "react-bootstrap";
import { updateTodo, removeTodo } from "../../redux/features/todos/todosSlice";
import { useNavigate, Outlet } from "react-router-dom";

export const Todos: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {!todos.length && <h2>You dont have any todo</h2>}
      <Outlet />

      <Stack gap={3}>
        {todos.slice(0, 40).map((todo) => {
          return (
            <Card key={todo.id} className="card">
              <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>
                  Completed: {todo.completed ? "yes" : "not"}
                </Card.Text>
                <Stack gap={3} direction="horizontal">
                  <Button
                    variant="primary"
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                      dispatch(removeTodo(todo));
                    }}
                  >
                    Remove todo
                  </Button>

                  <Button
                    variant="primary"
                    onClick={() =>
                      dispatch(
                        updateTodo({ ...todo, completed: !todo.completed })
                      )
                    }
                  >
                    {todo.completed ? "Uncompleted" : "Completed"}
                  </Button>

                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate(`/todos/${todo.id}`);
                    }}
                  >
                    Change route according todo[id]
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};
