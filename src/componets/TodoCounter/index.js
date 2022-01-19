import React from "react";
import { TodoContext } from "../../TodoContext";
import "./../../css/TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h6 className="display-6">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h6>
  );
};

export { TodoCounter };
