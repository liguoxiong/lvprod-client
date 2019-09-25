import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";

class Content extends React.PureComponent {
  render() {
    const { dataSource } = this.props;
    return (
      <div className="home-page-wrapper content0-wrapper">
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
              {dataSource.map((item, i) => {
                return (
                  <Col
                    key={i.toString()}
                    className="content0-block"
                    md={8}
                    xs={24}
                  >
                    <div className="content0-block-item">
                      <div className="content0-block-icon">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <h1 className="content0-block-title"><span>{item.title}</span></h1>
                      <div><span>{item.description}</span></div>
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
