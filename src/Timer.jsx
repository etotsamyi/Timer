import React from 'react';
import { Button } from 'antd';

export default class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msTime: 0,
      sTime: 0,
      mTime: 0,
      hTime: 0,
      active: false,
    };
  }

  run = () => {
    const { msTime } = this.state;
    this.setState({ msTime: msTime + 1 });
    this.timeToClock();
  }

  handleStart = () => {
    const { active } = this.state;
    this.setState({ active: !active });
    if (!active) {
      this.timerID = setInterval(() => this.run(), 10);
    } else {
      clearInterval(this.timerID);
    }
  }

  handleDrop = () => {
    clearInterval(this.timerID);
    this.setState({
      msTime: 0,
      sTime: 0,
      mTime: 0,
      hTime: 0,
      active: false,
    })
  }

  timeToClock = () => {
    const { msTime, sTime, mTime, hTime } = this.state;
    if (mTime === 60) {
      this.setState({ mTime: 0, hTime: hTime + 1 });
    }
    if (sTime === 60) {
      this.setState({ sTime: 0, mTime: mTime + 1 });
    }
    if (msTime === 100) {
      this.setState({ msTime: 0, sTime: sTime + 1 });
    }
  }

  render() {
    const { msTime, sTime, mTime, hTime, active } = this.state;

    return (
      <div>
        <Button className="btn" onClick={this.handleStart}>{active ? 'Пауза' : 'Запустить'}</Button>
        <Button className="btn" onClick={this.handleDrop}>Сброс</Button>
        <div className="clock">
          {hTime < 10 ? `0${hTime}` : `${hTime}`} :
          {mTime < 10 ? ` 0${mTime}` : ` ${mTime}`} :
          {sTime < 10 ? ` 0${sTime}` : ` ${sTime}`} :
          {msTime < 10 ? ` 0${msTime}` : ` ${msTime}`}
        </div>
      </div>
    );
  }
}
