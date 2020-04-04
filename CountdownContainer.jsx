/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-plusplus */

import React, { useState, useRef } from 'react';
import CountDown from './Countdown';

const CountdownContainer = () => {
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  });
  const handleInputChange = event => {
    debugger;
    setTime({
      ...time,
      [event.currentTarget.name]: Number(event.currentTarget.value),
    });
  };
  const [sliderValue, setSlider] = useState({
    min: 0,
  });
  const handleChange = event => {
    debugger;
    setSlider({
      ...sliderValue,
      [event.currentTarget.name]: Number(event.currentTarget.value),
    });
  };
  console.log(sliderMinutes);

  const [perc, setPerc] = useState({
    minValue: 0,
    secValue: 0,
  });
  const [interv, setInterv] = useState();
  const [keys, setKeys] = useState(0);
  const sliderMinutes = sliderValue.min;
  let updatedS = time.sec;
  let updatedM = time.min;
  let updateMS = 0;
  const value = Number(perc.minValue * 60 + perc.secValue + 1);
  const updatedValue = Number(updatedM * 60 + updatedS);
  const percentage = Math.ceil(100 - (updatedValue * 100) / value);

  const myAudio = useRef();

  const handleBeep = () => {
    if (myAudio.current !== null) {
      myAudio.current.play();
    }
    return myAudio.current.play();
  };

  if (updatedS > 60) {
    updatedS = 59;
  }
  if (updatedM > 720) {
    updatedM = 720;
  }

  const stop = () => {
    clearInterval(interv);
    setKeys(2);
  };

  const reset = () => {
    clearInterval(interv);
    setKeys(0);
    setTime({
      msec: 100,
      sec: 1,
      min: 1,
    });
  };

  const run = () => {
    if (updatedM === 0 && updatedS === 0) {
      updatedM = 0;
      updatedS = 0;
      handleBeep();
      return stop();
    }
    if (updatedS === 0) {
      updatedM--;
      updatedS = 59;
    }
    if (updateMS === 0) {
      updatedS--;
      updateMS = 99;
    }
    updateMS--;
    return setTime({
      msec: updateMS,
      sec: updatedS,
      min: updatedM,
    });
  };

  const start = () => {
    run();
    setPerc({
      minValue: updatedM,
      secValue: updatedS,
    });
    setKeys(1);
    setInterv(setInterval(run, 10));
  };

  const resume = () => {
    run();
    setKeys(1);
    setInterv(setInterval(run, 10));
  };

  return (
    <div>
      <CountDown
        keys={keys}
        minutes={updatedM}
        seconds={updatedS}
        reset={reset}
        stop={stop}
        start={start}
        resume={resume}
        handleInputChange={handleInputChange}
        value={time}
        percentage={percentage}
        handleChange={handleChange}
        sliderValue={sliderMinutes}
      />
      <audio src="https://avto-life.club/alert.ogg" ref={myAudio} preload="true" id="1" />
    </div>
  );
};

export default CountdownContainer;
