import React from 'react';

const Result = props => {
  const { foodValue } = props;
  return (
    <React.Fragment>
      {foodValue > 0 ? (
        <div className="section calculate-food-result">
          Food Value: {foodValue.toFixed(2)} lbs per day
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};
export default Result;
