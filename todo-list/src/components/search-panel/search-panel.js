import React from 'react';

export default class SearchPanel extends React.Component {
  constructor () {
    super();

    this.state = {
      term: ''
    };

    this.onTextChanged = (event) => {
      const { onSearch } = this.props;

      this.setState({
        term: event.target.value
      });

      onSearch(event.target.value);
    };
  };

  render () {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type here to search"
        value={ this.state.term }
        onChange={ this.onTextChanged } />
    );
  };
};
