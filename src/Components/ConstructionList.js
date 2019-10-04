import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Carousel } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './serviceList.style.less';
import axios from 'axios';

class ConstructionList extends React.Component {
  state = {
    constructions: [],
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    axios.all([axios.get(`/api/constructions?limit=100`)]).then(
      axios.spread(constructions => {
        this.setState({
          constructions: constructions.data.data,
        });
      }),
    );
  };
  render() {
    const { constructions } = this.state;
    return (
      <div id="service-list" className="home-page-wrapper content0-wrapper">
        <div className="home-page content0">
          <div className="title-wrapper">
            <h1>CÁC CÔNG TRÌNH - DỰ ÁN ĐÃ THI CÔNG</h1>
          </div>
          <OverPack playScale={0.3} className="">
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              className="content0-block-wrapper"
            >
              {constructions.map((item, i) => {
                return (
                  <Row className="half-post-entry d-block bg-light" key={item._id}>
                    {i % 2 === 0 && (
                      <Col md={12} xs={24} className="contents">
                        <h2>{item.title}</h2>
                        <p className="mb-3">{item.description}</p>
                      </Col>
                    )}
                    <Col md={12} xs={24} className="img-bg">
                    <Carousel autoplay>
          {!!item.image &&
            item.image.map($item => (
              <div key={$item.uid}>
                <img width="100%" src={$item.url} alt={$item.name}></img>
              </div>
            ))}
        </Carousel>
                    </Col>
                    {i % 2 !== 0 && (
                      <Col md={12} xs={24} className="contents">
                        <h2>{item.title}</h2>
                        <p className="mb-3">{item.description}</p>
                      </Col>
                    )}
                  </Row>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default ConstructionList;
