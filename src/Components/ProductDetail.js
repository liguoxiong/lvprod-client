import React, { useState, useEffect } from "react";
import { Row, Col, Carousel, Descriptions } from "antd";

const ProductDetail = product => {
  // const [item, setItem] = useState({});
  // useEffect(() => setItem(product), [product]);
  const {
    category,
    image,
    name,
    origin,
    description,
    dilivery_time,
    model_number,
    warranty_time,
    documentation
  } = product;
  // console.log("item", item);
  return (
    <Row>
      <Col xs={24} md={10}>
        <Carousel autoplay dotPosition="right">
          {!!image &&
            image.map(item => (
              <div key={item.uid}>
                <img width="100%" src={item.url} alt={item.name}></img>
              </div>
            ))}
        </Carousel>
      </Col>
      <Col xs={24} md={10}>
        <Descriptions title="Chi Tiết Sản Phẩm">
          <Descriptions.Item label="Tên Sản Phẩm">{name}</Descriptions.Item>
          <Descriptions.Item label="Mã Sản Phẩm">
            {model_number}
          </Descriptions.Item>
          <Descriptions.Item label="Loại Sản Phẩm">
            {!!category && category.title}
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả">{description}</Descriptions.Item>
          <Descriptions.Item label="Thông số kỹ thuật">
            {documentation}
          </Descriptions.Item>
          <Descriptions.Item label="Xuất xứ">{origin}</Descriptions.Item>
          <Descriptions.Item label="Thời gian giao hàng">
            {dilivery_time}
          </Descriptions.Item>
          <Descriptions.Item label="Bảo hành">
            {warranty_time}
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
};

export default ProductDetail;
