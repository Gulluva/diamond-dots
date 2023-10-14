import './App.css';
import AppContextProvider, { AppContext } from './contexts/AppContext';
import { Canvas } from './components/Canvas';
import StaticCanvas from './components/StaticCanvas';

// const dotarray = [
//   { x: 250, y: 75, colour: 'black' },
//   { x: 200, y: 150, colour: 'black' },
//   { x: 300, y: 150, colour: 'black' },
//   { x: 150, y: 225, colour: 'black' },
//   { x: 250, y: 225, colour: 'black' },
//   { x: 350, y: 225, colour: 'black' },
//   { x: 200, y: 300, colour: 'black' },
//   { x: 300, y: 300, colour: 'black' },
//   { x: 250, y: 375, colour: 'black' }
// ];


  // Is this possible to solve? 3342444312  Or should there be a button to say it's impossible?  What data storage is needed to keep track of the responses to each of the possible arrangements?


export default function App() {
  return (
    <AppContextProvider>
      <div><Canvas /></div>
      <div><StaticCanvas /></div>
        
    </AppContextProvider>

  );
}

