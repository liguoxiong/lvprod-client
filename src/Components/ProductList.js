import React, { Component } from "react";
import { Row, Col, Button, Modal } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
import ProductDetail from "./ProductDetail";
import axios from "axios";

class Content5 extends React.Component {
  state = {
    Products: [],
    loading: false,
    visible: false,
    product: {}
  };
  componentDidMount() {
    axios.all([axios.get("/api/products")]).then(
      axios.spread(products => {
        this.setState({
          catActive: "",
          Products: products.data.data
        });
      })
    );
  }

  showModal = id => {
    axios.get(`/api/products/${id}`).then(res => {
      console.log("product", res.data.data);
      this.setState({
        product: res.data.data,
        visible: true
      });
    });
  };
  handleOk = () => {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  getChildrenToRender = data =>
    data.map((item, i) => {
      return (
        <Col key={i.toString()} className="block" md={8} xs={24}>
          <div
            className="bg-img1 size-a-5 how1 pos-relative"
            style={{
              backgroundImage: `url(${item.image[0].url ||
                item.image[0].thumbUrl})`
            }}
          >
            <div
              onClick={() => this.showModal(item._id)}
              className="dis-block how1-child1 trans-03 dis-cur"
            ></div>

            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
              {/* <Button
                ghost
                onClick={() => this.showModal(item._id)}
                className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0  trans-03 p-rl-5 p-t-2"
              >
                Xem thêm
              </Button> */}

              <h3 className="how1-child2 m-t-14">
                <div
                  onClick={() => this.showModal(item._id)}
                  className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03 dis-cur"
                >
                  {item.name}
                </div>
              </h3>
            </div>
          </div>
        </Col>
      );
    });

  handleSelectCategory = id => {
    let query = "";
    if (id !== "") {
      query = `category=${id}`;
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
    const { visible, Products, product } = this.state;
    const childrenToRender = this.getChildrenToRender(Products);
    return (
      <div {...props} className="home-page-wrapper productList-wrapper">
        <div className="home-page productList">
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
              className="productList-img-wrapper"
              gutter={16}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
        <Modal
          visible={visible}
          title={null}
          width="90vw"
          centered
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <ProductDetail product={product} />
        </Modal>
      </div>
    );
  }
}

export default Content5;
