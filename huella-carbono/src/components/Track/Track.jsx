import React from "react";
import { Link } from 'react-router-dom'

const Track = () => {
  return (
    <div>
      <Link to="/form-transport">Transport</Link>
      <Link to="/form-food">Food</Link>
      <Link to="/form-home">Home</Link>
    </div>
  );
};

export default Track;
