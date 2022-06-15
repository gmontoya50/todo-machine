import React from "react";
import "./../../css/TodoCounter.css";

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h6 className={`display-6 ${!!loading && "TodoCounter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h6>
  );
};

export { TodoCounter };
