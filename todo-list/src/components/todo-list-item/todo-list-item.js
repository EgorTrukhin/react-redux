import React from 'react';

// деструктуризация входного параметра с набором свойств,
// в данном случае свойство lable и important
const TodoListItem = ( { label, important = false } ) => {

  const style = {
    color: important ? 'tomato' : 'black'
  };

  return <span style={ style }>{ label }</span>;
};

export default TodoListItem;
