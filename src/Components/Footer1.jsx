import React from "react";
import {Link} from 'react-router-dom'
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import { getChildrenToRender } from "./utils";
import { isImg } from "./utils";

class Footer extends React.Component {
  static defaultProps = {
    className: "footer1"
  };

  state = {
    info: this.props.dataSource.info,
    category: this.props.dataSource.category,
    services: this.props.dataSource.services
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dataSource !== prevProps.dataSource) {
      this.setState({
        info: this.props.dataSource.info,
        category: this.props.dataSource.category,
        services: this.props.dataSource.services
      });
    }
  }

  categoryMap = category =>
    category.map((item, i) => ({
      link: `link${i}`,
      href: "#",
      children: item.title
    }));

    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

  getLiChildren = data =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col
          key={i.toString()}
          name="category"
          xs={24}
          md={6}
          className="block"
          title={null}
          content={null}
        >
          <h2>
            {typeof title.children === "string" &&
            title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  render() {
    const { info, category, services } = this.state;
    console.log(info);
    console.log(category);
    console.log(this.categoryMap(category));
    const data = {
      children: [
        {
          title: {
            className: "logo",
            children: info.logo
          },
          childWrapper: {
            className: "slogan",
            children: [
              {
                name: "content0",
                children: `Hotline: ${info.phone}`
              }
            ]
          }
        },
        {
          title: { children: "Sản phẩm" },
          childWrapper: {
            children: this.categoryMap(category)
          }
        },
        {
          title: { children: "Tin tức" },
          childWrapper: {
            children: [
              { href: "#", name: "link0", children: "FAQ" },
              { href: "#", name: "link1", children: "RSS" }
            ]
          }
        },
        {
          title: { children: "Liên kết" },
          childWrapper: {
            children: [
              { href: info.facebook, name: "link0", children: "Fanpage" },
              { href: "#", name: "link1", children: "Đối tác" }
            ]
          }
        }
      ]
    };
    const { ...props } = this.props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getLiChildren(data.children);
    return (
      <div id="footer" className="home-page-wrapper footer1-wrapper">
        <OverPack className="footer1" playScale={0.2}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            className="home-page"
            gutter={0}
          >
            <Col
              name="category"
              xs={24}
              md={6}
              className="block"
              title={null}
              content={null}
            >
              <h2>
                <img src={info.logo} width="100%" alt="img" />
              </h2>
              <div className="slogan">Hotline: {info.phone}</div>
            </Col>
            <Col
              name="category"
              xs={24}
              md={6}
              className="block"
              title={null}
              content={null}
            >
              <h2>Sản phẩm</h2>
              <div>
                {category.map(item => (
                  <div key={item._id}>
                    <Link to={`/product/${item._id}`} onClick={this.scrollToTop}>{item.title}</Link>
                  </div>
                ))}
              </div>
            </Col>
            <Col
              name="category"
              xs={24}
              md={6}
              className="block"
              title={null}
              content={null}
            >
              <h2>Dịch vụ</h2>
              <div>
                {services.map(item => (
                  <div key={item._id}>
                    <Link to='/services'>{item.title}</Link>
                  </div>
                ))}
              </div>
            </Col>
            <Col
              name="category"
              xs={24}
              md={6}
              className="block"
              title={null}
              content={null}
            >
              <h2>Liên kết</h2>
              <div style={{width: '320px'}}>
              <div
                className="fb-page"
                // data-tabs="timeline,messages"
                data-href="https://www.facebook.com/DaiThienLocDecor"
                data-width="360"
                data-height="200"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/DaiThienLocDecor"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/DaiThienLocDecor">
                    DTL Decor 3D
                  </a>
                </blockquote>
              </div>
              </div>
              <div style={{marginTop: '10px'}}>
                <iframe
                  title="Youtube"
                  width="320"
                  height="180"
                  src="https://www.youtube.com/embed/hsGXrA7OyuY?playlist=hsGXrA7OyuY&loop=1"
                ></iframe>
              </div>
            </Col>
          </QueueAnim>
          <TweenOne
            animation={{ y: "+=30", opacity: 0, type: "from" }}
            key="copyright"
            className="copyright-wrapper"
          >
            <div className="home-page">
              <div className="copyright">
                <span>
                  ©2019 by <a href="https://vulocgroup.com">Vulocgroup</a> All
                  Rights Reserved
                </span>
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
