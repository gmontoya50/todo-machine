import React from "react";
import { Form } from "react-bootstrap";


const TodoSearch = ({searchValue, setSearchValue, loading} ) => {
  const onSearchValueChange = (event) => {
    console.info(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        type="text"
        placeholder="Seach Task"
        className="TodoSearch"
        onChange={onSearchValueChange}
        value={searchValue}
        disabled={loading}
      />
      <Form.Text className="text-muted">
      Busqueda.
      </Form.Text>
    </Form.Group>
  );
};

export { TodoSearch };
