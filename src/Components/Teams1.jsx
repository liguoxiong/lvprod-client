import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';

class Teams1 extends React.PureComponent {
  // getBlockChildren = (data) =>
  //   data.map((item, i) => {
  //     const { titleWrapper, ...$item } = item;
  //     return (
  //       <Col key={i.toString()} className='block'
  //       md={8}
  //       xs={24}>
  //         {titleWrapper.children.map(getChildrenToRender)}
  //       </Col>
  //     );
  //   });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    // const listChildren = this.getBlockChildren(dataSource.block.children);
    return (
      <div {...props} className='home-page-wrapper teams1-wrapper'>
        <div className='home-page teams1'>
          <div className='title-wrapper'>
            <h1>DỰ ÁN TIÊU BIỂU</h1>
            <div className="title-content">Các công trình đã thi công</div>
          </div>
          <OverPack playScale={0.3} className=''>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              className='block-wrapper'
              component={Row}
            >
              {dataSource.map((item, i) => {
                return (
                  <Col
                    key={i.toString()}
                    className="block"
                    md={8}
                    xs={24}
                  >
                    <div className="block" >
                      <div className="teams1-image">
                        <img src={item.image[0].url} alt={item.title} />
                      </div>
                      <h1 className="'teams1-title'"><span>{item.title}</span></h1>
                      <div className="teams1-content"><span>{item.description}</span></div>
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams1;
