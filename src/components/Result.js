import React from 'react';

const Result = props => {
  const { foodValue } = props;
  return (
    <React.Fragment>
      {foodValue > 0 ? (
        <div className="section calculate-food-result">
          Food Needed: {foodValue.toFixed(2)} lbs per month
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};
export default Result;
