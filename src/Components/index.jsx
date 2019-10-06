/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { Helmet } from "react-helmet";
import { enquireScreen } from "enquire-js";
import axios from "axios";

import Nav0 from "./Nav0";
import Banner1 from "./Banner1";
import Content0 from "./Service";
import Content5 from "./Content5";
import Contact from "./Contact";
import Footer1 from "./Footer1";
import Team1 from "./Teams1";
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
      Services: [],
      AllCategory: [],
      Info: {},
      constructions: []
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
        axios.get("/api/categories"),
        axios.get("/api/constructions?limit=3"),
        axios.get("/api/info")
      ])
      .then(
        axios.spread((banners, services, categories, constructions, info) => {
          // console.log("banner: ", banners.data.data);
          this.setState({
            Banner10DataSource: banners.data.data
          });
          // console.log("services: ", services.data.data);
          this.setState({
            Services: services.data.data
          });
          // console.log("categories: ", categories.data.data);
          this.setState({
            AllCategory: categories.data.data
          });
          // console.log("constructions: ", constructions.data.data);
          this.setState({
            constructions: constructions.data.data
          });
          this.setState({
            Info: info.data.data[0]
          });
        })
      );
  }
  handleScroll = () => {
    const elm = document.getElementById("lienhe");
    elm.scrollIntoView({});
  };

  render() {
    const children = [
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={this.state.Banner10DataSource}
        isMobile={this.state.isMobile}
        ctaClick={this.handleScroll}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={this.state.Services}
        isMobile={this.state.isMobile}
      />,
      // <Video
      //   id="Content4_0"
      //   key="Content4_0"
      //   dataSource={Content40DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={this.state.AllCategory}
        isMobile={this.state.isMobile}
      />,
      // <Products />,
      // <Content3
      //   id="Content3_0"
      //   key="Content3_0"
      //   dataSource={Content30DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Team1
        id="Team1_0"
        key="Team1_0"
        dataSource={this.state.constructions}
        isMobile={this.state.isMobile}
      />,
      <Contact
        id="Contact"
        key="Contact"
        dataSource={this.state.Info}
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
        <Helmet>
          <title>CÔNG TY TNHH TM - DV - KT VŨ LỘC</title>
          <meta
            name="description"
            content="Cung cấp các loại băng tải - Cung cấp máy móc ngành da giày - Thiết kế thi công showroom gạch trang trí cao cấp"
          />
        </Helmet>
        {this.state.show && children}
      </div>
    );
  }
}
