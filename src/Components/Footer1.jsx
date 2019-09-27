import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender } from './utils';
import { isImg } from './utils';

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };

  state = {
    info: this.props.dataSource.info,
    category: this.props.dataSource.category
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dataSource !== prevProps.dataSource) {
      this.setState({info: this.props.dataSource.info, category: this.props.dataSource.category});
    }
  }

  categoryMap = (category) => (
    category.map((item, i) => ({
      link: `link${i}`, href: '#', children: item.title
    }))
  )

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} name="category" xs={24} md={6} className="block" title={null} content={null}>
          <h2>
            {typeof title.children === 'string' &&
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
    const {info, category} = this.state;
    console.log(info)
    console.log(category)
    console.log(this.categoryMap(category))
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
                children: "Dịch vụ hàng đầu tại Việt Nam"
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
            {childrenToRender}
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            className="copyright-wrapper"
          >
            <div className="home-page">
              <div className="copyright">
              <span>
          ©2019 by <a href="https://vulocgroup.com">Vulocgroup</a> All Rights Reserved
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
