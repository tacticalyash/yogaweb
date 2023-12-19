// details.js

import React from 'react';
import './details.css'; // Make sure to create a details.css file for styling
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className="details-container">
      <h2>Yoga Class Rules</h2>
      <ul>
        <li>
          <span className="rule-text">Only people within the age limit of 18-65 can enroll for the monthly classes and they will</span>
        </li>
        <li>
          <span className="rule-text">be paying the fees on a month on month basis. I.e. an individual will have to pay the fees</span>
        </li>
        <li>
          <span className="rule-text">every month and he can pay it any time of the month.</span>
        </li>
        <li>
          <span className="rule-text">They can enroll any day but they will have to pay for the entire month. The monthly fee is</span>
        </li>
        <li>
          <span className="rule-text">500/- Rs INR.</span>
        </li>
        <li>
          <span className="rule-text">There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The</span>
        </li>
        <li>
          <span className="rule-text">participants can choose any batch in a month and can move to any other batch next</span>
        </li>
        <li>
          <span className="rule-text">month. I.e. participants can shift from one batch to another in different months but in the</span>
        </li>
        <li>
          <span className="rule-text">same month they need to be in the same batch.</span>
        </li>
      </ul>

      <Link to="/" className="go-back-button">
        Go Back to Registration
      </Link>
    </div>
  );
};

export default Details;
