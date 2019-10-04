import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './serviceList.style.less';
import axios from 'axios';

class ServiceList extends React.Component {
  state = {
    services: [],
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    axios.all([axios.get(`/api/services?limit=100`)]).then(
      axios.spread(services => {
        this.setState({
          services: services.data.data,
        });
      }),
    );
  };
  render() {
    const { services } = this.state;
    return (
      <div id="service-list" className="home-page-wrapper content0-wrapper">
        <div className="home-page content0">
          <div className="title-wrapper">
            <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
          </div>
          <OverPack playScale={0.3} className="">
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              className="content0-block-wrapper"
            >
              {services.map((item, i) => {
                return (
                  <Row className="half-post-entry d-block bg-light" key={item._id}>
                    {i % 2 === 0 && (
                      <Col md={12} xs={24} className="contents">
                        <h2>{item.title}</h2>
                        <p className="mb-3">{item.description}</p>
                      </Col>
                    )}
                    <Col md={12} xs={24} className="img-bg">
                      <img src={item.image} alt={item.title} width="100%" height="100%" />
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

export default ServiceList;
