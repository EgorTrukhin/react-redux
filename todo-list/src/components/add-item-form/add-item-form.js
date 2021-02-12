import React from 'react';

import './add-item-form.css';

export default class AddItemForm extends React.Component {
  constructor() {
    super();

    this.state = {
      label: ""
    }

    this.onInputChanged = (event) => {
      this.setState({
        label: event.target.value
      });
    };

    this.onSubmit = (event) => {
      event.preventDefault();
      this.props.onAdded(this.state.label);
      this.setState({
        label: ""
      });
    };
  };

  render() {
    return (
      <form className="add-item-form d-flex"
            onSubmit={ this.onSubmit }>
        <input  type="text"
                className="form-control"
                onChange={ this.onInputChanged }
                placeholder="What needs to be done"
                value={ this.state.label }/>
        <button className="btn btn-primary float-right">
                Add
        </button>
      </form>
    );
  }
}
