import React from 'react';

const NavigationBg = React.forwardRef((props, ref) => {
  return (
    <svg
      className="transition"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        className="path"
        stroke="#eeeeee"
        fill="#eeeeee"
        strokeWidth="2px"
        dur="10s"
        vectorEffect="non-scaling-stroke"
        d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        ref={ref}
      />
    </svg>
  );
});

export default NavigationBg;
