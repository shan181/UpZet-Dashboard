import "./Signup.css";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("formData", JSON.stringify(values));
    navigate("/Login");
  };
  const handleButton = () => {
    form.submit();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    

    // authenticate

    navigate("/Signup");

  };

  return (
    <div className="Container">
    <Form 
    className="Formfe"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <div className="immg">
        
        </div>
        <h1> Sign Up </h1>
      <Form.Item
      style={{width:"80%"}}
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
        style={{width:"80%"}}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone No"
        name="PhoneNo"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your Email!',
        //   },
        // ]}
        style={{width:"80%"}}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        style={{width:"80%"}}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleButton}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Signup;
