import React, { useState } from 'react';

export default function Number({ value, onToggle }) {
  const [isActive, setIsActive] = useState(false);
  const colorMap = {
    1: 'white',
    2: 'red',
    3: 'green',
    4: 'yellow',
    5: 'blue',
    6: 'orange',
    7: 'purple',
    8: 'pink',
    9: 'brown',
    // ... Add colors for other numbers
  };
  const color = colorMap[value];

  const handleClick = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    onToggle(value, newActiveState);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: isActive ? color : 'grey',
        borderColor: color,
        borderWidth: '2px',
        fontSize: '2rem',
        fontWeight: 'bold', 
        color: isActive ? 'lightgrey' : color,
      }}
    >
      {value}
    </button>
  );
}

