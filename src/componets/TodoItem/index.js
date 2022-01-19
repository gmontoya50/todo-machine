import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsFillXCircleFill, BsCheckLg } from "react-icons/bs";

const TodoItem = (props) => {
  return (
    <Row className="border rounded mt-2 p-2 bg-white">
      <Col sm={3} md={3}>
        <BsCheckLg
          color={`${props.completed ===true ? "green" : ''}`}
          size={25}
          onClick={props.onCompleted}
        />
      </Col>
      <Col
        sm={5}
        md={5}
        className={`${props.completed && "text-decoration-line-through"}`}
      >
        {props.text}
      </Col>
      <Col sm={2} md={2}>
        <BsFillXCircleFill color="red" size={25} onClick={props.onDeleted} />
      </Col>
    </Row>
  );
};

export { TodoItem };
