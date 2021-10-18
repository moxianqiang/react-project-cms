import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import './index.less'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Card title="文字背景" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div><h3>芳芳老师喊你上课</h3></div>
            <div><h3>芳芳老师喊你吃饭</h3></div>
            <div><h3>芳芳老师喊你打豆豆</h3></div>
          </Carousel>
        </Card>

        <Card title="图片轮播" className="silder-wrap">
          <Carousel autoplay effect="fade">
            <div><img src="/assets/carousel-img/carousel-1.jpg" alt=""/></div>
            <div><img src="/assets/carousel-img/carousel-2.jpg" alt=""/></div>
            <div><img src="/assets/carousel-img/carousel-3.jpg" alt=""/></div>
          </Carousel>
        </Card>
      </div>
    );
  }
}
