import React from "react";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";
import { getChildrenToRender } from "./utils";

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menu = {
      logo: this.props.dataSource.logo,
      // logo: "https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg",
      Menu: [
        {
          children: "Sản phẩm",
          subItem: this.props.dataSource.category
        },
        {
          children: "Dịch vụ"
        },
        {
          children: "Giới thiệu"
        },
        {
          children: "Liên hệ"
        }
      ]
    };
    this.state = {
      phoneOpen: undefined
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen
    });
  };

  render() {
    console.log(this.props.dataSource);
    const { isMobile } = this.props;
    const { phoneOpen } = this.state;
    const navData = this.menu.Menu;
    const navChildren = navData.map((item, i) => {
      const { children, subItem } = item;
      if (subItem) {
        return (
          <SubMenu
            key={i.toString()}
            className="header0-item"
            title={
              <div href="#" className="header0-item-block">
                <div name="text">{children}</div>
              </div>
            }
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              return (
                <Item key={ii.toString()} className="item-sub">
                  <div className="item-sub-item">
                    <div className="item-image">
                      <img src={$item.image} alt={$item.title}></img>
                    </div>
                    <h1 name="title" className="item-title">
                      {$item.title}
                    </h1>
                    <div name="content" className="item-content">
                      {$item.description}
                    </div>
                  </div>
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={i.toString()} className="header0-item">
          <a href="#" className="header0-item-block">
            <div name="text">{children}</div>
          </a>
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
          >
            <img height="34px" src={this.menu.logo} alt="img" />
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
