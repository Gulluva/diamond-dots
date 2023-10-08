import { useRef, useEffect, useState } from 'react';

export default function StaticCanvas(props) {

    const canvasRef = useRef(null);
  
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
      for (let i = props.dotarray.length-1; i >= 0 ; i--) {
        context.beginPath();
        context.fillStyle = props.dotarray[i].colour;
        context.arc(props.dotarray[i].x, props.dotarray[i].y, radius, startAngle, endAngle);
        context.fill();
          context.closePath();
      }
    }, []);

    return (
      <canvas ref={canvasRef} dotarray={props.dotarray} />
    )


}
