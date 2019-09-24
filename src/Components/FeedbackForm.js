import React from "react";
import axios from "axios";
import { Form, Icon, Input, Button, Row, Col } from "antd";
import "./less/feedbackForm.less";
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    loading: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        axios
          .post("/api/sendmail", values)
          .then(res => {
            this.setState({ loading: false });
            alert("Gửi yêu cầu thành công");
          })
          .catch(err => {
            this.setState({ loading: false });
            alert("Có lỗi xảy ra, vui lòng thử lại");
          });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="feedback-form">
        <Row>
          <Col>
            <FormItem className="form-input">
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "Vui lòng nhập Họ & Tên" }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="Họ và Tên"
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormItem className="form-input">
              {getFieldDecorator("phone", {
                rules: [
                  { required: true, message: "Vui lòng nhập số điện thoại!" }
                ]
              })(
                <Input
                  prefix={<Icon type="phone" style={{ fontSize: 13 }} />}
                  placeholder="Số điện thoại"
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormItem className="form-input">
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Vui lòng nhập email" }]
              })(
                <Input
                  prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
                  placeholder="Email"
                />
              )}
            </FormItem>
          </Col>
        </Row>
        {/* <Row>
          <Col>
          <FormItem className="form-input">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Vui lòng nhập tiêu đề' }],
            })(
              <Input prefix={<Icon type="edit" style={{ fontSize: 13 }} />} placeholder="Tiêu đề" />
            )}
          </FormItem>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <FormItem className="form-input">
              {getFieldDecorator("message", {
                rules: [{ required: true, message: "Vui lòng nhập yêu cầu" }]
              })(<Input.TextArea rows={4} placeholder="Yêu cầu" />)}
            </FormItem>
          </Col>
        </Row>
        <FormItem className="form-input">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={this.state.loading}
          >
            Gửi yêu cầu
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
