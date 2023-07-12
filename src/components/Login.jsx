import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (
      formData.username === values.username &&
      formData.password === values.password
    ) {
      console.log("User logged in successfully!");

      navigate("/");
    } else {
      console.log("User Not logged in successfully!");
      // success();
    }
  };
  const handleButton = () => {
    navigate("/Signup");
  };
  const toDashoard = () => {
    form.submit();
    messageApi.open({
      type: "error",
      content: "Invalid Username or Password",
      duration: 2,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);

    // authenticate

    navigate("/Login");
  };
  return (
    <div className="Container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <div className="immg"></div>
        <h1> Log In</h1>
        <Form.Item
          name="username"
          className="feild"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="feild"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" className="feild" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
        </Form.Item>

        <Form.Item>
          {contextHolder}
          <Button
            onClick={toDashoard}
            type="primary"
            htmlType="submit"
            style={{ marginLeft: 280 }}
            className="login-form-button"
          >
            LogIn
          </Button>

          <Button onClick={handleButton} style={{ marginLeft: 25 }}>
            {" "}
            Register now!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
