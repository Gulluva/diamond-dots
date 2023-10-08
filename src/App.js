import './App.css';
import { Canvas } from './components/Canvas';
import StaticCanvas from './components/StaticCanvas';

const dotarray = [
  { x: 250, y: 75, colour: 'black' },
  { x: 200, y: 150, colour: 'black' },
  { x: 300, y: 150, colour: 'black' },
  { x: 150, y: 225, colour: 'black' },
  { x: 250, y: 225, colour: 'black' },
  { x: 350, y: 225, colour: 'black' },
  { x: 200, y: 300, colour: 'black' },
  { x: 300, y: 300, colour: 'black' },
  { x: 250, y: 375, colour: 'black' }
];

const colorMap = {
  0: 'black',
  1: 'white',
  2: 'red',
  3: 'green',
  4: 'yellow',
  5: 'blue',
  6: 'orange',
  7: 'purple',
  8: 'pink',
  9: 'brown'
  // ... Add colors for other numbers
};

function digString2Dots (digstring, posBase, multiplier, colArray) {
  const digstringArray = digstring.split('');
  console.log({digstringArray})
  const returnArray = [];
  for (let index = 0; index < digstringArray.length; index++) {
    const element = {x: multiplier*posBase[index].x, y: multiplier*posBase[index].y, colour: colArray[digstringArray[index]]};
    returnArray.push(element);
    
  }
  return returnArray;
  
}
const positionBase = [
  { x: 10, y: 3},
  { x: 8, y: 6},
  { x: 12, y: 6},
  { x: 6, y: 9},
  { x: 10, y: 9},
  { x: 14, y: 9},
  { x: 8, y: 12},
  { x: 12, y: 12},
  { x: 10, y: 15}
];
export default function App() {
  return (
    <>
    <div><Canvas dotarray={digString2Dots('000000000', positionBase, 25, colorMap)} /></div>
    <div><StaticCanvas  dotarray={digString2Dots('244434332', positionBase, 20, colorMap)} /></div>
       
    </>

  );
}

