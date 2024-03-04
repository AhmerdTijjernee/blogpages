import React from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';

const Details = () => {

  const {id} = useParams();

  return (
    <div>
      <h1>hello i am blog number</h1>
    </div>
  )
}

export default Details;