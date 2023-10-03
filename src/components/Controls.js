import React from 'react';
import Number from './Number'; 

export default function Controls({ onButtonToggle }) {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
        <Number key={num} value={num} onToggle={onButtonToggle} />
      ))}
    </div>
  );
}
