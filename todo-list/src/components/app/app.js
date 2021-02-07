import React from 'react';

import './app.css';

// импорт компонентов реакт-приложения
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

const App = () => {

  const todoData = [
    {label: 'Build My First React App', important: false, id: 1},
    {label: 'Complete React Course', important: true, id: 2},
    {label: 'Make Awesome React App', important: false, id: 3}
  ];

  return (
    <div className="todo-app">

      <AppHeader todo={3} done={1}/>

      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>

      <TodoList todos={ todoData }/>
    </div>
  );
};

export default App;
