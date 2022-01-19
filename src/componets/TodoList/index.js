import React from "react";
import { Container } from "react-bootstrap";

const TodoList = (props) => {
  return (
    <Container className="bg-one-color">
      {props.children}
    </Container>
  );
};

export { TodoList };
