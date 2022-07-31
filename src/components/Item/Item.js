import React from "react";

const Item = ({ todo, todos, setTodos }) => {
  const { id, isComplated, text } = todo;

  const deleteBtn = (todoId) => {
    const filterTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos([...filterTodo]);
  };

  const editBtn = (todoId) => {
    const editText = prompt("Yangi todo kiritng? ")
    const findTodo = todos.find(todo => todo.id === todoId);
    findTodo.text = editText;
    setTodos([...todos])
  };

  const checkInput = (todoId) => {
    const findTodo = todos.find(todo => todo.id === todoId);
    findTodo.isComplated = !findTodo.isComplated;
    setTodos([...todos])
  };

  return (
    <>
      <li className="d-flex align-items-center mt-3">
      <span>Id: {id}</span>
      <input onChange={() => checkInput(id)} defaultChecked={isComplated} className="mx-2" type="checkbox" />
      <strong className={isComplated && "text-decoration-line-through"}>{text}</strong>
      <button onClick={() => editBtn(id)} className="btn btn-danger mx-2">
        Edit
      </button>
      <button onClick={() => deleteBtn(id)} className="btn btn-primary">
        Delete
      </button>
    </li>
    </>
  
  );
};

export default Item;
