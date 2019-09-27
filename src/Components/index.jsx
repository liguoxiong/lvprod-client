/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import axios from "axios";

import Nav0 from "./Nav0";
import Banner1 from "./Banner1";
import Content0 from "./Service";
import Content5 from "./Content5";
import Content3 from "./Content3";
import Contact from "./Contact";
import Footer1 from "./Footer1";
import Team1 from "./Teams1";
import Video from './Video'
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Title Video</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: (
          <>
            <p>Description</p>
          </>
        ),
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: 'https://www.youtube.com/watch?v=c3WiRVkQ6IM&feature=share',
      image: 'https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg',
    },
  },
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
      Banner10DataSource: [],
      Content00DataSource: [],
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
          console.log("banner: ", banners.data.data);
          this.setState({
            Banner10DataSource: banners.data.data
          });
          console.log("services: ", services.data.data);
          this.setState({
            Content00DataSource: services.data.data
          });
          console.log("categories: ", categories.data.data);
          this.setState({
            AllCategory: categories.data.data
          });
          console.log("constructions: ", constructions.data.data);
          this.setState({
            constructions: constructions.data.data
          });
          this.setState({
            Info: info.data.data[0]
          });
        })
      );
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={{
          category: this.state.AllCategory,
          logo: this.state.Info.logo
        }}
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
      <Video
        id="Content4_0"
        key="Content4_0"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />,
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
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={{info: this.state.Info, category: this.state.AllCategory}}
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
