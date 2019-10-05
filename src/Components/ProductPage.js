import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

class Content extends React.PureComponent {
  state = {
    categories: []
  };
  componentDidMount() {
    axios.all([axios.get("/api/categories?limit=100")]).then(
      axios.spread(categories => {
        this.setState({
          categories: categories.data.data
        });
      })
    );
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  directToDetail = id => {
    this.props.history.push(`/product/${id}`);
    this.scrollToTop();
  };
  render() {
    const { categories } = this.state;
    return (
      <div className="home-page-wrapper content0-wrapper">
        <div className="home-page content0">
          <div className="title-wrapper">
            <h1>SẢN PHẨM</h1>
          </div>
          <OverPack playScale={0.3} className="">
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              className="content0-block-wrapper"
            >
              {!!categories &&
                categories.map((item, i) => {
                  return (
                    <Col
                      key={i.toString()}
                      className="content0-block"
                      md={8}
                      xs={24}
                    >
                      <div
                        className="content0-block-item product-linkToDetail"
                        onClick={() => this.directToDetail(item._id)}
                      >
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
