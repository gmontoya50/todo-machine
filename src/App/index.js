import React from "react";
import { TodoCounter } from "./../componets/TodoCounter";
import { TodoSearch } from "./../componets/TodoSearch";
import { TodoList } from "./../componets/TodoList";
import { TodoItem } from "./../componets/TodoItem";
import { TodoButtonCreate } from "./../componets/TodoButtonCreate";
import { Container, Row, Col } from "react-bootstrap";
import { useTodos } from "./useTodos";
import { Modal } from "./../componets/Modal";
import { TodoForm } from "../componets/TodoForm";
import { SkeletoLoader } from "../componets/SkeletoLoader";
import { TodoHeader } from "../componets/TodoHeader";
import { ChangeALertWirhStirageListener } from "../componets/ChangeAlert";
import "./../css/TodoCounter.css";

const App = () => {
  const {
    error,
    loading,
    searchedTodos,
    onCompleted,
    onDeleted,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();
  return (
    <Container className="bg-one-color">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <div className="redondeado bg-white p-5 border">
            <TodoHeader loading={loading}>
              <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
              />
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </TodoHeader>
          </div>
          <TodoList>
            {error && <p>Hubo un error</p>}
            {loading && <SkeletoLoader />}
            {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}
            {!loading && searchedTodos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => onCompleted(todo.id)}
                onDeleted={() => onDeleted(todo.id)}
              />
            ))}
          </TodoList>
          <TodoButtonCreate openModal={openModal} setOpenModal={setOpenModal} />
        </Col>
      </Row>
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <Row className="justify-content-md-center mt-5 pt-3">
        <Col md={4}>
          <ChangeALertWirhStirageListener
            sincronize={() => {
              sincronizeTodos();
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
