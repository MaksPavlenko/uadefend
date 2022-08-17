import React from 'react';
import moment from 'moment';
// import PropTypes from 'prop-types';

const startCount = 1;
const startDate = moment('2022-02-24');

let interval = null;

function updateResult(startCount, startDate) {
  return startCount + moment().diff(startDate, 'day');
}

const HomeCounter = () => {
  const [result, setResult] = React.useState(
    updateResult(startCount, startDate)
  );

  React.useEffect(() => {
    function setCount() {
      const updatedCount = startCount + moment().diff(startDate, 'day');

      setResult(updatedCount);
    }

    if (interval === null) {
      interval = setInterval(setCount, 24000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <span className="main-counter__value">{result}</span>
    </div>
  );
};

export default HomeCounter;
