import { useRef, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';

export default function StaticCanvas() {

    const canvasRef = useRef(null);

    const {
      numDots, setNumDots,
      puzzleDigits, setPuzzleDigits,
      staticDigits, setStaticDigits,
      colorMap, positionBase, digString2Dots, generateRandomString    
      } = useApp();

      const dotarray = digString2Dots(staticDigits, positionBase[numDots], 20, colorMap)
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.canvas.width = 400;
      context.canvas.height = 360;
      context.strokeStyle = "grey";
      context.fillStyle = "lightgrey";
      context.lineWidth = 12;
      context.beginPath();
      context.roundRect(48, 8, 304, 344, 16);
      context.stroke();
      context.fill();
  
      let radius = 24; // Arc radius
      let startAngle = 0; // Starting point on circle
      let endAngle = Math.PI * 2; // End point on circle
      for (let i = dotarray.length-1; i >= 0 ; i--) {
        context.beginPath();
        context.fillStyle = dotarray[i].colour;
        context.arc(dotarray[i].x, dotarray[i].y, radius, startAngle, endAngle);
        context.fill();
          context.closePath();
      }
    }, []);

    return (
      <canvas ref={canvasRef} />
    )


}
