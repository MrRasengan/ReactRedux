import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.description}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
