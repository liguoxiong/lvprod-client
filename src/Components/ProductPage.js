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
import Video from "./Video";
import ProductList from './ProductList'
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

const Content40DataSource = {
  wrapper: { className: "home-page-wrapper content4-wrapper" },
  page: { className: "home-page content4" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>Title Video</p>
          </>
        ),
        className: "title-h1"
      },
      {
        name: "content",
        className: "title-content content4-title-content",
        children: (
          <>
            <p>Description</p>
          </>
        )
      }
    ]
  },
  video: {
    className: "content4-video",
    children: {
      video: "https://www.youtube.com/watch?v=c3WiRVkQ6IM&feature=share",
      image: "https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg"
    }
  }
};

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
    // this.scrollRef = React.createRef();
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
        axios.get("/api/services?limit=3"),
        axios.get("/api/categories"),
        axios.get("/api/constructions?limit=3"),
        axios.get("/api/info")
      ])
      .then(
        axios.spread((services, categories, constructions, info) => {
          console.log("services: ", services.data.data);
          this.setState({
            Services: services.data.data
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
    const catId = this.props.match.params.id;
    const children = [
      <ProductList
        id="productList"
        key="Content5_0"
        category={catId}
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
