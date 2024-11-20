import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [colorCount, setColorCount] = useState({
    green: 0,
    goldenrod: 0,
    red: 0,
  });

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        setMsg(randomAnswer.msg);
        setColor(randomAnswer.color);
        setColorCount((prevCount) => ({
          ...prevCount, 
          [randomAnswer.color] : prevCount[randomAnswer.color] + 1,
        }));
    };

    const handleReset = () => {
      setMsg("Think of a Question");
      setColor("black");
      setColorCount({
        green: 0,
        goldenrod: 0,
        red: 0,
      });
    };

  return (
    <div className="Eightball-container">
    <div className="Eightball" onClick={handleClick} style={{ backgroundColor: color }}>
      <p className="Eightball-text">{msg}</p>
    </div>
    <button className="Eightball-reset" onClick={handleReset}> Reset </button>
    <div className="Eightball-record-keeping">
      <p>Green: {colorCount.green}</p>
      <p>Goldenrod: {colorCount.goldenrod}</p>
      <p>Red: {colorCount.red}</p>
    </div>
  </div>
  );
}

export default EightBall;
