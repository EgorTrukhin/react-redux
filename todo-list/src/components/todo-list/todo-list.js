import React from 'react';

import TodoListItem from './todo-list-item'

// деструктуризация входного параметра с набором свойств,
// в данном случае свойство todos (массив)
const TodoList = ( { todos } ) => {

// спред-оператор '...item'
  const elements = todos.map(
    (item) => {
      return (
        <li>
          <TodoListItem { ... item } />
        </li>
      );
    }
  );

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;
