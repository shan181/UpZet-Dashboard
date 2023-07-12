import React from "react";
import { Card, Space, Table, Tag, Divider, Radio } from "antd";
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
    height: 330px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
const StyledCardforms2 = styled(Card)`
  && {
    height: 440px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
const StyledCardforms3 = styled(Card)`
  && {
    height: 370px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const columnstable2 = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const datatable2 = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];
const columnstable3 = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  Table.EXPAND_COLUMN,
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  Table.SELECTION_COLUMN,
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
const datatable3 = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  },
];
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const Tables = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>Tables</StyledTitle>

      <StyledCardforms1>
        <Table columns={columns} dataSource={data} />
      </StyledCardforms1>
      <StyledCardforms2>
        <>
          <Radio.Group
            onChange={({ target: { value } }) => {
              setSelectionType(value);
            }}
            value={selectionType}
          >
            <Radio value="checkbox">Checkbox</Radio>
            <Radio value="radio">radio</Radio>
          </Radio.Group>

          <Divider />

          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columnstable2}
            dataSource={datatable2}
          />
        </>
      </StyledCardforms2>
      <StyledCardforms3>
        <Table
          columns={columnstable3}
          rowSelection={{}}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
          }}
          dataSource={datatable3}
        />
      </StyledCardforms3>
    </>
  );
};
export default Tables;
