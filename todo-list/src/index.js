import React from 'react';
import ReactDOM from 'react-dom';

// импорт компонентов реакт-приложения
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const todoData = [
  {label: 'Drink Coffe', important: false},
  {label: 'Build React App', important: true},
  {label: 'Have A Lunch', important: false}
];

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={ todoData }/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
