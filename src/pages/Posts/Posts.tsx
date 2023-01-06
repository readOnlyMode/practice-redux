import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { fetchPosts } from "../../redux/features/posts/postsReducer";
import { Stack, Card } from "react-bootstrap";
export const Posts: React.FC = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Stack gap={3}>
      {posts.slice(0, 10).map((post) => (
        <Card key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};
