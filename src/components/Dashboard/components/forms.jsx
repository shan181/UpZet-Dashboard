import {
  Card,
  Button,
  Form,
  Input,
  Select,
  Radio,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  TreeSelect,
} from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { styled } from "styled-components";

const StyledTitle = styled(Title)`
  display: flex;
  text-align: left;
  margin-left: 20px;
`;
const StyledCardforms1 = styled(Card)`
  && {
    height: 250px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
const StyledCardforms2 = styled(Card)`
  && {
    height: 350px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
const StyledCardforms3 = styled(Card)`
  && {
    height: 600px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Forms = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange2 = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>Forms</StyledTitle>

      <StyledCardforms2>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          style={{
            maxWidth: formLayout === "inline" ? "none" : 600,
          }}
        >
          <Form.Item label="Form Layout" name="layout">
            <Radio.Group value={formLayout}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </StyledCardforms2>
      <StyledCardforms3>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange2}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </StyledCardforms3>
      <StyledCardforms1>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="note"
            label="Note"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "8px" }}
            >
              Submit
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginRight: "8px" }}
            >
              Reset
            </Button>
            <Button
              type="link"
              htmlType="button"
              onClick={onFill}
              style={{ marginRight: "8px" }}
            >
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </StyledCardforms1>
    </>
  );
};
export default Forms;
