import React from 'react';

import './add-item-form.css';

const AddItemForm = ({ onAdded }) => {
  return (
    <div className="add-item-form">
      <button type="button"
              className="btn btn-primary float-right"
              onClick={ onAdded }>
              Add
      </button>
    </div>
  );
};

export default AddItemForm;
