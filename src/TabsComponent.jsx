/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import { Tabs } from 'antd';
import Timer from './Timer';
import Countdown from './Countdown';

export default class TabsComponent extends React.Component {
  render() {
    const { TabPane } = Tabs;
    function switchTab() {
      // console.log(key);
    }

    return (
      <Tabs defaultActiveKey="1" onChange={switchTab}>
        <TabPane tab="Timer" key="1">
          <Countdown />
        </TabPane>
        <TabPane tab="Countdown" key="2">
          <Timer />
        </TabPane>
      </Tabs>
    );
  }
}
