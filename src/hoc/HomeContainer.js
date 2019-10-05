/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import axios from "axios";
import { BackTop, Icon, Affix, Row } from "antd";
import { ReactComponent as Facebook } from "./../assets/icons/facebook.svg";
import { ReactComponent as Messenger } from "./../assets/icons/messenger.svg";
import { ReactComponent as Zalo } from "./../assets/icons/zalo.svg";
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
      Info: {}
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
    const { Info, isMobile } = this.state;
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
        <BackTop>
          <div className="ant-back-top-inner">
            <span
              style={{
                fontSize: "25px",
                color: "#fff",
                padding: "5px",
                borderRadius: "3px",
                background: "#001529",
                width: "35px",
                height: "35px"
              }}
            >
              <Icon type="up" />
            </span>
          </div>
        </BackTop>
        <Affix offsetTop={200}>
          <Row className="icon-wrapper">
            <Row>
              <a
                className="icons"
                href={Info.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="icon-box-shadow" />
              </a>
            </Row>
            <Row>
              <a
                className="icons"
                href={
                  Info.messenger
                    ? Info.messenger.replace("www.facebook.com", "m.me")
                    : ""
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Messenger className="icon-box-shadow" />
              </a>
            </Row>
            <Row>
              <a
                className="icons"
                href={Info.zalo ? `http://zalo.me/${Info.zalo}` : ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Zalo className="icon-box-shadow" />
              </a>
            </Row>
          </Row>
        </Affix>
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
