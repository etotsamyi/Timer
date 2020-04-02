import React from 'react';
import CountdownContainer from './CountdownContainer'

export default class Countdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = ({
      seconds: 0,
      minutes: 0,
    })
  }

  handleSliderChange = (e) => {
    this.setState({ minutes: e, })
  }

  run = () => {
    const { seconds } = this.state;
    this.setState({ seconds: seconds - 1 });
    this.timeToClock();
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <CountdownContainer 
          handleSliderChange={this.handleSliderChange} 
          minutes={minutes} 
          seconds={seconds}
        />
      </div>
    )
  }
}