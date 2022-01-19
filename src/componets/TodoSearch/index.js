import React from "react";
import { Form } from "react-bootstrap";
import { TodoContext } from "../../TodoContext";

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.info(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        type="text"
        placeholder="Seach Task"
        onChange={onSearchValueChange}
        value={searchValue}
      />
      <Form.Text className="text-muted">
      Busqueda.
      </Form.Text>
    </Form.Group>
  );
};

export { TodoSearch };
