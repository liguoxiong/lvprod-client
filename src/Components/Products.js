import React from 'react'
import { Button, Card } from 'antd';
import TweenOne from 'rc-tween-one';
import { Row, Col, Layout } from 'antd';
const Products = () => {
  const { Meta } = Card;
  const liAnim = {
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  };
  return (
    <div>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button>Dashed</Button>
        <Button>Danger</Button>
      </div>
      <div>
      <Row gutter={16}>
        <TweenOne component={Col}
          animation={liAnim}>
        <TweenOne>
        
        <Col span={8}>
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      </Col>
      </TweenOne>
      <TweenOne>
      <Col span={8}>
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      </Col>
      </TweenOne>
      <TweenOne>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </Col>
        </TweenOne>
        <TweenOne>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </Col>
        </TweenOne>
      </TweenOne>
      </Row>
      </div>
    </div>
  )
}

export default Products
