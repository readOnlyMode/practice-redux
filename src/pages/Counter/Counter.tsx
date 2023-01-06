import React, { useState, useRef, useEffect } from "react";
import { Container, Button, Card, Stack } from "react-bootstrap";
import {
  increment,
  decrement,
} from "../../redux/features/counter/counterSlice";
import { RootState } from "../../redux/store/store";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";

export const Counter: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  });

  const h2Element = useRef<HTMLHeadingElement>(null);

  const [counter, setCounter] = useState<number>(0);

  return (
    <Container fluid="lg">
      <h2 ref={h2Element}>Counter Page</h2>

      <Stack gap={4}>
        <Card>
          <Card.Body>
            <Card.Title>UseState</Card.Title>

            <Stack direction="horizontal" gap={3}>
              <Button
                size="sm"
                variant="primary"
                onClick={() => setCounter((counter) => counter + 1)}
              >
                Increase
              </Button>
              <Button
                size="sm"
                variant="success"
                onClick={() => setCounter((counter) => counter - 1)}
              >
                Decrease
              </Button>
            </Stack>

            <h4>Count: {counter}</h4>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Redux State</Card.Title>

            <Stack direction="horizontal" gap={3}>
              <Button
                size="sm"
                variant="primary"
                onClick={() => dispatch(increment())}
              >
                Increase
              </Button>
              <Button
                size="sm"
                variant="success"
                onClick={() => dispatch(decrement())}
              >
                Decrease
              </Button>
            </Stack>

            <h4>Count: {count}</h4>
          </Card.Body>
        </Card>
        <h4>Render Count: {renderCount.current}</h4>
      </Stack>
    </Container>
  );
};
