import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({
        label,
        onDeleted,
        onToggleDone,
        onToggleImportant,
        done,
        important
      }) => {
        
  let classNames_TodoListItem = "todo-list-item";

  if ( done ) {
    classNames_TodoListItem += " done";
  };

  if ( important ) {
    classNames_TodoListItem += " important"
  };

  return (
    <span className={ classNames_TodoListItem }>
      <span
        className="todo-list-item-label"
        onClick={ onToggleDone }>
          { label }
      </span>

      <span className="float-right">
        <button
          type="button"
          className="btn btn btn-outline-success btn-sm"
          onClick= { onToggleImportant }>
            <i className="fa fa-star"></i>
        </button>

        <button
          type="button"
          className="btn btn btn-outline-danger btn-sm"
          onClick= { onDeleted }>
            <i className="fa fa-trash-o"></i>
        </button>
      </span>

    </span>
  );
};

export default TodoListItem;
