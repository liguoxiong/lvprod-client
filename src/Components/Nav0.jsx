import React from "react";
import { Link } from "react-router-dom";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      logo: this.props.dataSource.logo,
      subItem: this.props.dataSource.category
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dataSource !== prevProps.dataSource) {
      this.setState({
        logo: this.props.dataSource.logo,
        subItem: this.props.dataSource.category
      });
    }
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen
    });
  };

  goToHomePage = () => {
    window.location = "/";
  };

  render() {
    console.log(this.state.subItem);
    const menu = {
      logo: this.state.logo,
      // logo: "https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg",
      Menu: [
        {
          children: "Trang chủ",
          linkTo: "/"
        },
        {
          children: "Sản phẩm",
          subItem: this.state.subItem,
          linkTo: "/products"
        },
        {
          children: "Dịch vụ",
          linkTo: "/services"
        },
        {
          children: "Dự án",
          linkTo: "/constructions"
        },
        {
          children: "Liên hệ",
          linkTo: "/contact"
        }
      ]
    };
    const { isMobile } = this.props;
    const { phoneOpen } = this.state;
    const navData = menu.Menu;
    const navChildren = navData.map((item, i) => {
      const { children, subItem } = item;
      if (subItem) {
        return (
          <SubMenu
            key={i.toString()}
            className="header0-item"
            title={
              <Link to={item.linkTo || "/"} className="header0-item-block">
                <div
                  name="text"
                  style={{
                    color: "rgba(255, 255, 255, 0.65)",
                    ":hover": { color: "#fff" }
                  }}
                >
                  {children}
                </div>
              </Link>
            }
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              return (
                <Item key={$item._id.toString()} className="item-sub">
                  <Link to={`/product/${$item._id}`} className="item-sub-item">
                    <div className="item-image">
                      <img src={$item.image} alt={$item.title}></img>
                    </div>
                    <h1 name="title" className="item-title">
                      {$item.title}
                    </h1>
                    <div name="content" className="item-content">
                      {$item.description}
                    </div>
                  </Link>
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={i.toString()} className="header0-item">
          <Link to={item.linkTo || "#"} className="header0-item-block">
            <div name="text">{children}</div>
          </Link>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: "from" }}
        className="header0 home-page-wrapper"
      >
        <div className={`home-page${phoneOpen ? " open" : ""}`}>
          <TweenOne
            animation={{ x: -30, type: "from", ease: "easeOutQuad" }}
            className="header0-logo"
            onClick={this.goToHomePage}
            style={{ cursor: "pointer" }}
          >
            <img height="34px" src={menu.logo} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              className="header0-mobile-menu"
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            className="header0-menu"
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: e => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = "auto";
                      }
                    },
                    ease: "easeInOutQuad"
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? "inline" : "horizontal"}
              defaultSelectedKeys={["sub0"]}
              theme="dark"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
