import React from 'react';
import { Slider, Progress, Button } from 'antd';

export default class CountdownContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { seconds, minutes, handleSliderChange } = this.props;
    return (
      <div>
        <Slider
            max={60}
            min={0}
            defaultValue={minutes}
            onChange={e => handleSliderChange(e)}
            tooltipVisible
        />
        <Button className="btn" onClick={this.handleDrop}>Старт</Button>
        <div className="clock">
          {minutes < 10 ? ` 0${minutes}` : ` ${minutes}`} :
          {seconds < 10 ? ` 0${seconds}` : ` ${seconds}`}
        </div>
      </div>
    )
  }
}