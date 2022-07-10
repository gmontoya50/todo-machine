import React from "react";
import { useLocalStorage } from "./useLocalstorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
    
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] =  React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const onCompleted = (id) => {
    const taskIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[taskIndex].completed = !todos[taskIndex].completed;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id:todos.length,
      text,
      completed: false
    });
    saveTodos(newTodos);
  };

  const onDeleted = (id) => {
    const tempTodos = todos.filter((todo) => todo.id !== id);
    const newTodos = [...tempTodos];
    saveTodos(newTodos);
  };

  React.useEffect(() => {
    console.info("use effect");
  }, [totalTodos]);

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  return {
    loading,
    error,
    todos,
    searchedTodos,
    saveTodos,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    onCompleted,
    onDeleted,
    openModal, 
    setOpenModal,
    addTodo,
    sincronizeTodos,
  };
}

export {useTodos};
