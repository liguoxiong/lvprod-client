import React from "react";
import { Button, Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
import { isImg } from "./utils";
import "rc-banner-anim/assets/index.css";

const { BgElement } = Element;
class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.map((item, i) => {
      const { title, description, image } = item;
      return (
        <Element
          key={i.toString()}
          className="banner-user-elem"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center"
            }}
            className="bg"
          />
          <QueueAnim
            type={["bottom", "top"]}
            delay={200}
            key="text"
            className="banner1-text-wrapper"
          >
            <div key="logo" className="banner1-title">
              {typeof title === "string" && title.match(isImg) ? (
                <img src={title} width="100%" alt="img" />
              ) : (
                title
              )}
            </div>
            <div key="content" className="banner1-content">
              {description}
            </div>
            <Button
              ghost
              key="button"
              className="banner1-button"
              onClick={this.props.ctaClick}
            >
              Liên Hệ Đặt Hàng
            </Button>
          </QueueAnim>
        </Element>
      );
    });
    return (
      <div id="Banner1_0" key="Banner1_0" className="banner1">
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className="banner1-wrapper" key="wrapper">
            <BannerAnim key="BannerAnim" autoPlay>
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: "-=20",
            yoyo: true,
            repeat: -1,
            duration: 1000
          }}
          className="banner1-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}

export default Banner;
