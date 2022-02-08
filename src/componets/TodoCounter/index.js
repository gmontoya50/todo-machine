import React from "react";
import "./../../css/TodoCounter.css";

const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h6 className="display-6">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h6>
  );
};

export { TodoCounter };
