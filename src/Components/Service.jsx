import React from "react";
import { Link } from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

class Content extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    const { dataSource } = this.props;
    return (
      <div className="home-page-wrapper content0-wrapper">
        <div className="home-page content0">
          <div className="title-wrapper">
            <Link to="/services" onClick={this.scrollToTop}>
              <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
            </Link>
          </div>
          <OverPack playScale={0.3} className="">
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              className="content0-block-wrapper"
            >
              {dataSource.map((item, i) => {
                return (
                  <Col
                    key={i.toString()}
                    className="content0-block"
                    md={8}
                    xs={24}
                  >
                    <div className="content0-block-item">
                      <div className="container-border">
                        <div className="content0-block-icon">
                          <img
                            src={item.image}
                            alt={item.title}
                            height="100%"
                            width="100%"
                          />
                        </div>
                        <h2 className="content0-block-title">
                          <span>{item.title}</span>
                        </h2>
                        <div className="text-container">
                          <span>{item.description}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
