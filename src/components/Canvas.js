import { useRef, useEffect, useState } from 'react';
import Controls from './Controls';
import { useApp } from '../contexts/AppContext';


export function Canvas() {
  const {
    numDots, setNumDots,
    puzzleDigits, setPuzzleDigits,
    staticDigits, setStaticDigits,
    colorMap, positionBase, digString2Dots, generateRandomString    
    } = useApp();

   const canvasRef = useRef(null);
  const [activeNumbers, setActiveNumbers] = useState([]);
  const [freedots, setFreedots] = useState(generateConsecutiveArray(numDots));
  const [dotArrayRedraw, setDotArrayRedraw] = useState(digString2Dots(puzzleDigits, positionBase[numDots], 25, colorMap));

 // Is this possible to solve? 3342444312  Or should there be a button to say it's impossible?

  function generateConsecutiveArray(num) {
    let array = [];

    for (let i = 0; i < num; i++) {
      array.push(i);
    }

    return array;

  }

  function drawDotArray(dotArr) {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.canvas.width = 500;
    context.canvas.height = 450;
    context.strokeStyle = "grey";
    context.fillStyle = "lightgrey";
    context.lineWidth = 15;
    context.beginPath();
    context.roundRect(60, 10, 380, 430, 20);
    context.stroke();
    context.fill();

    let radius = 30; // Arc radius
    let startAngle = 0; // Starting point on circle
    let endAngle = Math.PI * 2; // End point on circle
    for (let i = dotArr.length-1; i >= 0 ; i--) {
      context.beginPath();
      context.fillStyle = dotArr[i].colour;
      context.arc(dotArr[i].x, dotArr[i].y, radius, startAngle, endAngle);
      context.fill();
        context.closePath();
    }
  }

  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.canvas.width = 500;
    context.canvas.height = 450;
    context.strokeStyle = "grey";
    context.fillStyle = "lightgrey";
    context.lineWidth = 15;
    context.beginPath();
    context.roundRect(60, 10, 380, 430, 20);
    context.stroke();
    context.fill();

    let radius = 30; // Arc radius
    let startAngle = 0; // Starting point on circle
    let endAngle = Math.PI * 2; // End point on circle
    for (let i = dotArrayRedraw.length-1; i >= 0 ; i--) {
      context.beginPath();
      context.fillStyle = dotArrayRedraw[i].colour;
      context.arc(dotArrayRedraw[i].x, dotArrayRedraw[i].y, radius, startAngle, endAngle);
      context.fill();
        context.closePath();
    }
  }, []);

  useEffect(() => {
    drawDotArray(dotArrayRedraw);
  }, [dotArrayRedraw]);

  const handleButtonToggle = (number, isActive) => {
    if (number > freedots.length && isActive) {
      console.log({number, freedots})
      return false;
    }
  
    if (isActive) {
      setActiveNumbers(prev => [...prev, number]);
      for(let i=0; i<number; i++) {
        setDotArrayRedraw(prev => {
          let newdotarray = [...prev];
          newdotarray[freedots[i]].colour = colorMap[number];
          return newdotarray;
        });
        // console.log({freedots});
        setFreedots(prev => prev.slice(1));
      }


    } else {
      setActiveNumbers(prev => prev.filter(n => n !== number));
      let count = number;
      for(let i=0; i < count;i++) {
      count++;        
      console.log({i}, dotArrayRedraw[i].colour, colorMap[number]);
        if(dotArrayRedraw[i].colour === colorMap[number]) {

          setDotArrayRedraw(prev => {
            let newdotarray = [...prev];
            newdotarray[i].colour = "black";
            console.log({i},{newdotarray});
            return newdotarray;
          });
          // console.log({freedots});
          setFreedots(prev => [i, ...prev].sort((a, b) => a - b));
          count--;
        }
      }

    }
    return true;
  };

  return (
  <>
    <canvas ref={canvasRef} />
    <Controls onButtonToggle={handleButtonToggle} />
    </>

  );
}