import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
  constructor() {
    super();

    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'active', label: 'Active'},
      {name: 'done', label: 'Done'}
    ];
  }

  render() {
    const { filter, onFilter } = this.props;

    const btns = this.buttons.map(( {name, label} ) => {
      const isActive = name == filter;
      const className = isActive ? "btn-info" : "btn-outline-secondary";

      return (
        <button type="button"
                className={ `btn ${ className }` }
                key={ name }
                onClick={ () => onFilter(name) }>
                { label }
        </button>
      );
    });

    return (
      <div className="btn-group">
        { btns }
      </div>
    );
  }
}
