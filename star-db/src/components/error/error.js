import react from 'react';

import './error.css';
import errorIcon from './error-icon.png';

const Error = () => {
  return (
    <div className="error">
      <img src={errorIcon}></img>
      <span className="oops">Oops!</span>
      <span>Something went wrong :(</span>
      <span>We're already working on it.</span>
    </div>
  );
}

export default Error;