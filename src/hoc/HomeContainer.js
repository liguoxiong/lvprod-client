/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import axios from "axios";

import Header from "../Components/Nav0";
import Footer1 from "../Components/Footer1";

import "../Components/less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
      Services: [],
      AllCategory: [],
      Info: {},
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
        axios.get("/api/services?limit=3"),
        axios.get("/api/categories"),
        axios.get("/api/info")
      ])
      .then(
        axios.spread((services, categories, info) => {
          this.setState({
            Services: services.data.data
          });
          this.setState({
            AllCategory: categories.data.data
          });
          this.setState({
            Info: info.data.data[0]
          });
        })
      );
  }
  render() {
    return (
      <div
        className="templates-wrapper"
        // ref={d => {
        //   this.dom = d;
        // }}
      >
        <Header
        id="Nav0_0"
        key="Nav0_0"
        dataSource={{
          category: this.state.AllCategory,
          logo: this.state.Info.logo
        }}
        isMobile={this.state.isMobile}
      />
      {this.props.children}
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={{
          info: this.state.Info,
          category: this.state.AllCategory,
          services: this.state.Services
        }}
        isMobile={this.state.isMobile}
      />
      </div>
    );
  }
}
