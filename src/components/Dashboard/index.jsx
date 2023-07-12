import Title from "antd/es/typography/Title";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DeleteOutlined,
  EditOutlined,
  LikeOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import Search from "antd/es/input/Search";
import CountUp from "react-countup";
import {
  Card,
  Col,
  Row,
  Statistic,
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Space,
  Avatar,
  Pagination,
} from "antd";
import ChartComp from "./components/Chartone";
import ChartComp2 from "./components/Charttwo";
import { updateDataSource } from "../Redux/DashboardSlice";
import moment from "moment";
import AddForm from "./components/Dataform";

const StyledTitle = styled(Title)`
  display: flex;
  text-align: left;
  margin-left: 20px;
`;

const StyledCard = styled(Card)`
  && {
    height: 150px;
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledCardChart = styled(Card)`
  && {
    height: 550px;
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledCardTable = styled(Card)`
  && {
    width: 1275px;
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledStatistic = styled(Statistic)`
  && .ant-statistic-title {
    font-size: 11px;
  }
  .ant-statistic-content {
    font-size: 20px;
  }
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
const StyledButton = styled(Button)`
  && {
    background-color: #1d2c3b;
    border-color: #1d2c3b;
  }
  &&:hover {
    background-color: #243847;
    border-color: #243847;
  }
`;
const formatter = (value) => <CountUp end={value} separator="," />;

//table components
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);

  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
const onSearch = (value) => console.log(value);
// FUNCTIONAL COMPONENT
const Dashboard = () => {
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state?.dashboard?.dataSource);
  const [editFormData, setEditFormData] = useState(null);
  const [open, setOpen] = useState(false);
  // const [searchValue, setSearchValue] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  // const onSearch = () => {
  //   // Filter the dataSource based on the searchValue
  //   const filteredData = dataSource.filter((item) =>
  //   item && item.name && item.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );

  //   // Use the filteredData for further operations or update the state if necessary
  // };

  // Delete button comp
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = dataSource.slice(startIdx, startIdx + itemsPerPage);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    dispatch(updateDataSource(newData));
  };

  //Edit button comp
  const handleEdit = (record) => {
    setEditFormData(record);
  };

  // form reset
  //<Table open1={open} setopen1={setopen} />
  // columns title
  const defaultColumns = [
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "Date",
      dataIndex: "Date",
      render: (date) => moment(date).format("YYYY-MM-DD"),
    },
    {
      title: "Price",
      dataIndex: "Price",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
    },
    {
      title: "Status",
      dataIndex: "Status",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 && (
          <>
            <Button
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)} //Pass record as parameter
            />
            <Button
              style={{ marginLeft: 10 }}
              shape="circle"
              icon={<DeleteOutlined />}
              danger
              onClick={() => handleDelete(record.key)}
            />
          </>
        ),
    },
  ];

  // Save the data
  const handleSave = (values) => {
    console.log(values);
    if (editFormData) {
      const newData = dataSource.map((item) => {
        if (item.key === editFormData.key) {
          return {
            ...item,
            ...values,
            Amount: "$ " + values.Price * values.Quantity,
          }; // Calculate the amount based on Price and Quantity
        }
        return item;
      });
      console.log(newData);
      dispatch(updateDataSource(newData));
      setEditFormData(null);
    } else {
      const newRecord = {
        ...values,
        Amount: "$ " + values.Price * values.Quantity, // Calculate the amount based on Price and Quantity
        key: Math.random(),
      };

      dispatch(updateDataSource([...dataSource, newRecord]));
    }
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: (row) => handleSave(record.key, row),
      }),
    };
  });

  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>Dashboard</StyledTitle>

      {/* FIRST FOUR CARDS */}
      <Row>
        <Col span={6}>
          <StyledCard bordered={false}>
            <Row gutter={16}>
              <Col span={12}>
                <StyledStatistic
                  title="Active Users"
                  value={112893}
                  formatter={formatter}
                />
              </Col>
              <Col span={12}>
                <StyledStatistic
                  title="Account Balance (CNY)"
                  value={112893}
                  precision={2}
                  formatter={formatter}
                />
              </Col>
            </Row>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard bordered={false}>
            <Row gutter={16}>
              <Col span={12}>
                <StyledStatistic
                  title="Active"
                  value={11.2}
                  precision={1}
                  valueStyle={{
                    color: "#3f8600",
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Col>
              <Col span={12}>
                <StyledStatistic
                  title="Idle"
                  value={9.3}
                  precision={1}
                  valueStyle={{
                    color: "#cf1322",
                  }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Col>
            </Row>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard bordered={false}>
            <Row gutter={16}>
              <Col span={12}>
                <StyledStatistic
                  title="Active"
                  value={1.11}
                  precision={2}
                  valueStyle={{
                    color: "#3f8600",
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Col>
              <Col span={12}>
                <StyledStatistic
                  title="Idle"
                  value={3.92}
                  precision={2}
                  valueStyle={{
                    color: "#cf1322",
                  }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Col>
            </Row>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard bordered={false} style={{ marginRight: "25px" }}>
            <Row gutter={16}>
              <Col span={12}>
                <StyledStatistic
                  title="Feedback"
                  value={1128}
                  prefix={<LikeOutlined />}
                />
              </Col>
              <Col span={12}>
                <StyledStatistic title="Unmerged" value={93} suffix="/ 100" />
              </Col>
            </Row>
          </StyledCard>
        </Col>
      </Row>

      {/* CHART CARDS */}
      <Row>
        <Col span={8}>
          <StyledCardChart bordered={false} style={{ width: "640px" }}>
            <ChartComp dataSource={dataSource} />
          </StyledCardChart>
        </Col>
        <Col span={8}>
          <StyledCardChart
            bordered={false}
            style={{ width: "615px", marginLeft: "240px" }}
          >
            <ChartComp2 dataSource={dataSource} />
          </StyledCardChart>
        </Col>
      </Row>

      {/* TABLE CARD */}
      <Row>
        <Col span={8}>
          <StyledCardTable
            bordered={false}
            extra={
              <Space>
                {/* <Search
                  placeholder="Search Data...."
                  onSearch={onSearch}
                  onChange={handleSearchChange}
                  value={searchValue}
                /> */}
                <StyledButton
                  title="Add information"
                  type="primary"
                  shape="round"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Add Information
                </StyledButton>
              </Space>
            }
          >
            <AddForm
              open={open}
              setOpen={setOpen}
              onFinish={handleSave}
              editFormData={editFormData}
            />
            <Table
              components={components}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={paginatedData}
              columns={columns}
              pagination={false}
            />
            <StyledPagination
              current={currentPage}
              total={dataSource.length}
              pageSize={itemsPerPage}
              onChange={(page) => setCurrentPage(page)}
            />
          </StyledCardTable>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
