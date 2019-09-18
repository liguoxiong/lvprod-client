import React from "react";
import { Row, Col, Button } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";

class Content5 extends React.PureComponent {
  getChildrenToRender = data =>
    data.map((item, i) => {
      return (
        <Col key={i.toString()} className="block" md={6} xs={24}>
          <div className="content5-block-content">
            <span>
              <img src={item.img} height="100%" alt="img" />
            </span>
            <p>{item.content}</p>
          </div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(dataSource.block);
    return (
      <div
        id="Content5_0"
        key="Content5_0"
        className="home-page-wrapper content5-wrapper"
      >
        <div className="home-page content5">
          <div key="title" className="title-wrapper">
            {dataSource.titleWrapper.map(getChildrenToRender)}
          </div>
          <div key="categoryList" className="category-wrapper">
            <Button type="primary">Tất cả</Button>
            {dataSource.categoriesList.map(item => (
              <Button>{item.title}</Button>
            ))}
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
              className="content5-img-wrapper"
              gutter={16}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content5;
