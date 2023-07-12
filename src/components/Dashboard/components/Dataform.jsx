import {
  Row,
  Col,
  Form,
  Input,
  Modal,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
import dayjs from "dayjs";
const treeData = [
  {
    value: "Confirm",
    label: "Confirm",
  },
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Cancel",
    label: "Cancel",
  },
];

// Main Component
const AddForm = ({ editFormData, onFinish, setOpen, open }) => {
  const [form] = Form.useForm();

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      const formattedValues = {
        ...values,
        Date: values.Date.toISOString().split("T")[0],
      };
      onFinish(formattedValues);
      form.resetFields();
      setOpen(false);
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  useEffect(() => {
    if (editFormData) {
      console.log(moment(editFormData.Date));
      form.setFieldsValue({
        ...editFormData,
        Date: dayjs(editFormData.Date),
      });
      setOpen(true);
    }
  }, [editFormData, form]);

  return (
    <>
      {/* model and form */}
      <Modal
        open={open}
        title="Add Some Information"
        okText="Submit"
        cancelText="Cancel"
        closable={false}
        onCancel={() => setOpen(false)}
        onOk={handleSave}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={null}
        >
          <Form.Item
            name="Name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please Enter Name",
              },
            ]}
          >
            <Input type="textarea" />
          </Form.Item>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="Date"
                label="Date"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Valid Date",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="Price"
                label="Price"
                style={{ marginLeft: 25 }}
                rules={[
                  {
                    required: true,
                    message: "Please Enter Price",
                  },
                ]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="Quantity"
                label="Quantity"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Quantity",
                  },
                ]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="Status"
            label="Status"
            rules={[
              {
                required: true,
                message: "Please Select Status",
              },
            ]}
          >
            <Select
              showSearch
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              allowClear
              options={treeData}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddForm;
