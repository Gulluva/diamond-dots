import './App.css';
import { Canvas } from './components/Canvas';

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
export default function App() {
  return (
    <>
      <Canvas dotarray={dotarray} /> 
    </>

  );
}

