import React from "react";
import { Link } from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender, isImg } from "./utils";

class Teams1 extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
  // getBlockChildren = (data) =>
  //   data.map((item, i) => {
  //     const { titleWrapper, ...$item } = item;
  //     return (
  //       <Col key={i.toString()} className='block'
  //       md={8}
  //       xs={24}>
  //         {titleWrapper.children.map(getChildrenToRender)}
  //       </Col>
  //     );
  //   });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    // const listChildren = this.getBlockChildren(dataSource.block.children);
    return (
      <div {...props} className="home-page-wrapper content0-wrapper">
        <div className="home-page content0">
          <div className="title-wrapper">
            <Link to="/constructions" onClick={this.scrollToTop}>
              <h1>DỰ ÁN TIÊU BIỂU</h1>
            </Link>
            <div className="title-content">Các công trình đã thi công</div>
          </div>
          <OverPack playScale={0.3} className="">
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              className="content0-block-wrapper"
              component={Row}
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
                      <div
                        className="container-border"
                        style={{ height: "65vh" }}
                      >
                        <div className="content0-block-icon">
                          <img
                            src={item.image[0].url}
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

export default Teams1;
