import React from "react";
import { Row, Col, Button, Icon } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
import RequestForm from "./FeedbackForm";

class Contact extends React.PureComponent {
  // getChildrenToRender = data =>
  //   data.map((item, i) => {
  //     return (
  //       <Col key={i.toString()} className="block" md={6} xs={24}>
  //         <div className="contact-block-content">
  //           <span>
  //             <img src={item.img} height="100%" alt="img" />
  //           </span>
  //           <p>{item.content}</p>
  //         </div>
  //       </Col>
  //     );
  //   });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    // const childrenToRender = this.getChildrenToRender(dataSource.block);
    return (
      <div
        id="Contact"
        key="Contact"
        className="home-page-wrapper contact-wrapper"
      >
        <div className="home-page contact">
          <Row>
            <div key="title" className="title-wrapper">
              <h1>{dataSource.titleWrapper}</h1>
            </div>
          </Row>
          <Row>
            <Col className="block" md={8} xs={24}>
              <div className="home-page contact">
                <RequestForm />
              </div>
            </Col>
            <Col className="block" md={16} xs={24}>
              <div className="home-page contact">
                <div key="company" className="title-wrapper">
                  <h2>{dataSource.info.company}</h2>
                </div>
                <OverPack className="content-template" playScale={0.3}>
                  <TweenOneGroup
                    component={Row}
                    key="ul"
                    enter={{
                      y: "+=30",
                      opacity: 0,
                      type: "from",
                      ease: "easeInOutQuad"
                    }}
                    leave={{ y: "+=30", opacity: 0, ease: "easeInOutQuad" }}
                    className="contact-img-wrapper"
                    gutter={16}
                  >
                    <Row>
                      <Col md={2} className="contact-content">
                        <Icon type="environment" style={{ fontSize: 18 }} />
                      </Col>
                      <Col md={22} className="contact-content">
                        <p>{dataSource.info.address}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} className="contact-content">
                        <Icon type="mail" style={{ fontSize: 18 }} />
                      </Col>
                      <Col md={22} className="contact-content">
                        <p>{dataSource.info.email}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} className="contact-content">
                        <Icon type="phone" style={{ fontSize: 18 }} />
                      </Col>
                      <Col md={22} className="contact-content">
                        <p>{dataSource.info.phone}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Icon type="facebook" />
                      <Icon type="phone" />
                    </Row>
                  </TweenOneGroup>
                </OverPack>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
