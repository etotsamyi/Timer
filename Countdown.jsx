/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Progress, Slider } from 'antd';
import classes from './app.module.scss';

const CountDown = props => {
  return (
    <div className={classes.activePart}>
      <div>
        <div className={classes.silder}>
          <Slider
            max={720}
            min={1}
            defaultValue={props.sliderValue}
            onChange={e => props.handleChange(e)}
            tooltipVisible
          />
        </div>
        <div className={classes.countdown}>
          <div className={classes.inputArea}>
            {props.keys > 0 ? (
              <div className={classes.span}>
                <span className={classes.span}>
                  {`${props.minutes >= 10 ? props.minutes : `0${props.minutes}`}` || '00'}
                </span>
                <span className={classes.span}>
                  {`: ${props.seconds >= 10 ? props.seconds : `0${props.seconds}`}` || '00'}
                </span>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  name="min"
                  value={props.minutes || 0}
                  onChange={props.handleInputChange}
                />
                <input
                  type="text"
                  name="sec"
                  value={props.seconds || 0}
                  onChange={props.handleInputChange}
                />
              </div>
            )}
          </div>
          <div className={classes.progress}>
            <Progress type="circle" percent={props.keys === 0 ? 0 : props.percentage} />
          </div>
        </div>

        {props.keys === 0 ? (
          <div className={classes.buttons}>
            <Button className={classes.button} onClick={props.start}>
              Запустить
            </Button>
          </div>
        ) : (
          ''
        )}
        {props.keys === 1 ? (
          <div className={classes.buttons}>
            <Button className={classes.button} onClick={props.stop}>
              Остановить
            </Button>
            <Button className={classes.button} onClick={props.reset}>
              Сброс
            </Button>
          </div>
        ) : (
          ''
        )}
        {props.keys === 2 ? (
          <div className={classes.buttons}>
            <Button className={classes.button} onClick={props.resume}>
              Запустить
            </Button>
            <Button className={classes.button} onClick={props.reset}>
              Сброс
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

CountDown.propTypes = {
  keys: PropTypes.number,
  reset: PropTypes.func,
  stop: PropTypes.func,
  start: PropTypes.func,
  handleInputChange: PropTypes.func,
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  percentage: PropTypes.number,
  resume: PropTypes.func,
  handleChange: PropTypes.func,
  sliderValue: PropTypes.number,
};

export default CountDown;
