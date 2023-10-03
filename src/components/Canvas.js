import { useRef, useEffect, useState } from 'react';
import Controls from './Controls';

export function Canvas(props) {
  const canvasRef = useRef(null);
  const [activeNumbers, setActiveNumbers] = useState([]);
  const [freedots, setFreedots] = useState([0,1,2,3,4,5,6,7,8]);
  const [dotArrayRedraw, setDotArrayRedraw] = useState(props.dotarray);
  const colorMap = {
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
    for (let i = props.dotarray.length-1; i >= 0 ; i--) {
      context.beginPath();
      context.fillStyle = props.dotarray[i].colour;
      context.arc(props.dotarray[i].x, props.dotarray[i].y, radius, startAngle, endAngle);
      context.fill();
        context.closePath();
    }
  }, []);

  useEffect(() => {
    drawDotArray(dotArrayRedraw);
  }, [dotArrayRedraw]);

  const handleButtonToggle = (number, isActive) => {
    if (number > freedots.length && isActive) {
      return;
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
  };

  return (
  <>
    <canvas ref={canvasRef} dotarray={props.dotarray} />
    <Controls onButtonToggle={handleButtonToggle} />
    </>

  );
}