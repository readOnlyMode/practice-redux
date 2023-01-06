import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { fetchUsers } from "../../redux/features/users/userSlice";
import { Card, Stack } from "react-bootstrap";

export const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Stack gap={3}>
      {users.map((user) => (
        <Card key={user.id}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle>{user.website}</Card.Subtitle>

            <Card.Text>{user.address.city}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};
