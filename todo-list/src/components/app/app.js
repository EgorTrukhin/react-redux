import React from 'react';

import './app.css';

// импорт компонентов реакт-приложения
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddItemForm from '../add-item-form';

export default class App extends React.Component {
  constructor() {
    super();

    this.maxId = 100;

    this.state = {
      items: [
        {label: 'Build My First React App', done: true, important: false, id: 1},
        {label: 'Complete React Course', done: false, important: true, id: 2},
        {label: 'Make Awesome React App', done: false, important: false, id: 3}
      ],
      search: '',
      filter: 'all'
    };

    this.createItem = (label) => {
      return {
        label,
        done: false,
        important: false,
        id: ++this.maxId
      };
    };

    this.deleteItem = (id) => {
      this.setState(( state ) => {
        const idx = state.items.findIndex((item) => item.id === id);
        const items = [
          ... state.items.slice(0, idx),
          ... state.items.slice(idx + 1)
        ];

        return { items };
      });
    };

    this.addItem = (label) => {
      const item = this.createItem(label);

      this.setState(( state ) => {
        const items = [
          ... state.items,
          item
        ];
        return { items };
      });
    };

    this.toggleProp = (items, id, propName) => {
      const idx = items.findIndex((item) => item.id === id);
      const oldItem = items[idx];

      const value = !oldItem[propName];
      const item = { ... oldItem, [propName]: value };

      return [
        ... items.slice(0, idx),
        item,
        ... items.slice(idx + 1)
      ];
    };

    this.onToggleDone = (id) => {
      this.setState(( state ) => {
        const items = this.toggleProp(state.items, id, 'done')
        return { items };
      });
    };

    this.onToggleImportant = (id) => {
      this.setState(( state ) => {
        const items = this.toggleProp(state.items, id, 'important')
        return { items };
      });
    };

    this.onSearch = (search) => {
      this.setState({ search });
    };

    this.onFilter = (filter) => {
      this.setState({ filter });
    };

    this.search = (items, search) => {
      if (search.length == 0) {
        return items;
      }

      return items.filter((item) =>
        item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    }

    this.filter = (items, filter) => {
      if (filter == 'all') {
        return items;
      } else if (filter == 'active') {
        return items.filter((item) => !item.done)
      } else {
        return items.filter((item) => item.done)
      }
    }
  };

  render() {
    const { items, search, filter  } = this.state;

    const visibleItems = this.filter(this.search(items, search), filter);
    const doneCount = items.filter((item) => item.done).length;
    const todoCount = items.length - doneCount;

    return (
      <div className="todo-app">

        <AppHeader todo={ todoCount } done={ doneCount }/>

        <div className="top-panel d-flex">
          <SearchPanel onSearch={ this.onSearch }/>
          <ItemStatusFilter
              filter={ filter }
              onFilter={ this.onFilter } />
        </div>

        <TodoList todos={ visibleItems }
        onDeleted={ this.deleteItem }
        onToggleDone={ this.onToggleDone }
        onToggleImportant={ this.onToggleImportant }/>

        <AddItemForm
        onAdded={ this.addItem } />
      </div>
    );
  };
};
