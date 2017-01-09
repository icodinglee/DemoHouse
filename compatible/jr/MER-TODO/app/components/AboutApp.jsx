import React, { Component } from 'react';
import {
  Accordion
} from 'amazeui-touch';
import '../styles/aboutApp.scss';

export default class AboutApp extends Component {
  render() {
    return (
      <Accordion
        className="about-app"
        activeKey={0}
        defaultActiveKey={0}
        inset>
        <Accordion.Item
          eventKey={0}
          title={'APP'}>
          <p>
            实习结束后，最近两个星期在学习 React 相关的知识，
            把 Webpack、Redux、React Router 这些知识点过了一遍之后，写的 DEMO 也挺多了，
            就希望做一个项目把这些知识点串联起来。<br/>
            使用 React 还是需要用到它的一个体系的东西更能发挥它的强大作用。
            于是，就有了这个 MER TODO，因为有点不太一样，所以就做成了移动版的。<br/>
            这个 App 大概花了三天的时间，很基础的一个东西，基本的功能都实现了，但是还有挺多的瑕疵...
          </p>
        </Accordion.Item>
      </Accordion>
    );
  }
}