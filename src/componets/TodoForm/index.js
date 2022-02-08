import React from "react";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onCancel = () => {
    //TODO
    setOpenModal(false);
    console.info("onCancel");
  };
  const onSubmit = (event) => {
    //TODO
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea value={newTodoValue} onChange={(event) => setNewTodoValue(event.target.value)} placeholder="Aqui tu tarea" />
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
