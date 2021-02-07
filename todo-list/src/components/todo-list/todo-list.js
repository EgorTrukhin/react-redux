import React from 'react';

import TodoListItem from '../todo-list-item'
import './todo-list.css';

// деструктуризация входного параметра с набором свойств,
// в данном случае свойство todos (массив)
const TodoList = ( { todos } ) => {

// спред-оператор '...item'
  const elements = todos.map(
    (item) => {
      const { id, ...itempProps } = item;

      return (
        <li key={ id } className="list-group-item">
          <TodoListItem { ... itempProps } />
        </li>
      );
    }
  );

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
