import React from "react";
import { Row, Col, Button, Icon } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
import RequestForm from "./FeedbackForm";
import { ReactComponent as Facebook } from './../assets/icons/facebook.svg';
import { ReactComponent as Messenger } from './../assets/icons/messenger.svg';
import { ReactComponent as Skype } from './../assets/icons/skype.svg';
import { ReactComponent as Viber } from './../assets/icons/viber.svg';
import { ReactComponent as Zalo } from './../assets/icons/zalo.svg';


class Contact extends React.Component {
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
              <h1>LIÊN HỆ</h1>
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
                  <h2>{!!dataSource && dataSource.company}</h2>
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
                    <Row className="contact-content">
                        <p><Icon type="environment" /><span> </span>
                         {dataSource.address}</p>
                    </Row>
                    <Row className="contact-content">
                        <p><Icon type="mail" /> <span> </span>
                        {dataSource.email}</p>
                    </Row>
                    <Row className="contact-content">
                        <p><Icon type="phone" /> <span> </span>
                        {dataSource.phone}</p>
                    </Row>
                    <Row className="icon-wrapper">
                      <div className="icons">
                      <Facebook />
                      </div>
                      <div className="icons">
                      <Messenger />
                      </div>
                      <div className="icons">
                      <Skype />
                      </div>
                      <div className="icons">
                      <Viber />
                      </div>
                      <div className="icons">
                      <Zalo />
                      </div>
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
