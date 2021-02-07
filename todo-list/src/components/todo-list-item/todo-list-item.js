import React from 'react';

import './todo-list-item.css';

// деструктуризация входного параметра с набором свойств,
// в данном случае свойство lable и important
const TodoListItem = ( { label, important = false } ) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={ style }>
          { label }
      </span>

      <span className="float-right">
        <button
          type="button"
          className="btn btn btn-outline-success btn-sm">
            <i className="fa fa-star"></i>
        </button>

        <button
          type="button"
          className="btn btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o"></i>
        </button>
      </span>

    </span>
  );
};

export default TodoListItem;
