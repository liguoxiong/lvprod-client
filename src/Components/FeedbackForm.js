import React from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row>
          <Col md={12} xs={24}>
            <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Vui lòng nhập Họ & Tên' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Họ và Tên" />
            )}
          </FormItem>
          </Col>
          <Col md={12} xs={24}>
            <FormItem>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Vui lòng nhập số điện thoại!' }],
            })(
              <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} placeholder="Số điện thoại" />
            )}
          </FormItem>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Vui lòng nhập email' }],
            })(
              <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email" />
            )}
          </FormItem>
          </Col>
        </Row>
        <Row>
          <Col>
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Vui lòng nhập tiêu đề' }],
            })(
              <Input prefix={<Icon type="edit" style={{ fontSize: 13 }} />} placeholder="Tiêu đề" />
            )}
          </FormItem>
          </Col>
        </Row>
        <Row>
          <Col>
          <FormItem>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Vui lòng nhập yêu cầu' }],
          })(
            <Input.TextArea rows={4} placeholder="Yêu cầu" />
          )}
        </FormItem>
          </Col>
        </Row>
        <FormItem>
       
          <Button type="primary" htmlType="submit" className="login-form-button">
            Gửi yêu cầu
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm