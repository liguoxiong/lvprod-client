/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import axios from "axios";

import Nav0 from "./Nav0";
import Banner1 from "./Banner1";
import Content0 from "./Content0";
import Content5 from "./Content5";
import Content3 from "./Content3";
import Contact from "./Contact";
import Footer1 from "./Footer1";
// import Products from './Products'

import {
  Nav00DataSource,
  Banner10DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
  ContactSource,
  Footer10DataSource
} from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
      Banner10DataSource: [],
      Content00DataSource: []
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true
        });
      }, 500);
    }
    axios
      .all([
        axios.get("/api/banners?limit=3"),
        axios.get("/api/services?limit=3"),
        axios.get("/api/categories")
      ])
      .then(
        axios.spread((banners, services, categories) => {
          console.log("banner: ", banners.data.data);
          this.setState({
            Banner10DataSource: banners.data.data
          });
          console.log("services: ", services.data.data);
          this.setState({
            Content00DataSource: services.data.data
          });
          console.log("categories: ", categories.data.data);
        })
      );
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={this.state.Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={this.state.Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Products />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Contact
        id="Contact"
        key="Contact"
        dataSource={ContactSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />
    ];
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
