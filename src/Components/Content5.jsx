import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
import axios from "axios";

class Content5 extends React.Component {
  state = {
    Products: []
  };
  componentDidMount() {
    axios.all([axios.get("/api/products?isShow=true&limit=8")]).then(
      axios.spread(products => {
        this.setState({
          catActive: "",
          Products: products.data.data
        });
      })
    );
  }
  getChildrenToRender = data =>
    data.map((item, i) => {
      return (
        <Col key={i.toString()} className="block" md={6} xs={24}>
          <div className="content5-block-content">
            <span>
              <img
                src={item.image[0].thumbUrl || item.image[0].url}
                height="100%"
                alt="img"
              />
            </span>
            <p>{item.name}</p>
          </div>
        </Col>
      );
    });

  handleSelectCategory = id => {
    let query = "isShow=true&limit=8";
    if (id !== "") {
      query = `category=${id}&limit=8`;
    }
    axios
      .get(`/api/products?${query}`)
      .then(res => this.setState({ catActive: id, Products: res.data.data }));
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(this.state.Products);
    return (
      <div
        id="Content5_0"
        key="Content5_0"
        className="home-page-wrapper content5-wrapper"
      >
        <div className="home-page content5">
          <div key="title" className="title-wrapper">
            <h1 className="title-h1">SẢN PHẨM</h1>
            <div className="title-content">
              Chúng tôi tự hào cung cấp các sản phẩm thế mạnh
            </div>
          </div>
          <div key="categoryList" className="category-wrapper">
            <Button
              type={this.state.catActive === "" ? "primary" : null}
              onClick={() => this.handleSelectCategory("")}
            >
              Tất cả
            </Button>
            {!!dataSource &&
              dataSource.map(item => (
                <Button
                  key={item._id}
                  type={this.state.catActive === item._id ? "primary" : null}
                  onClick={() => this.handleSelectCategory(item._id)}
                >
                  {item.title}
                </Button>
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
