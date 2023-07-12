import { DownOutlined } from "@ant-design/icons";
import { Button, Form, Radio, Space, Table, Card } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { styled } from "styled-components";

const StyledTitle = styled(Title)`
  display: flex;
  text-align: left;
  margin-left: 20px;
`;

const StyledCardemail = styled(Card)`
  && {
    height: 800px;
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
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

const data = [];

for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: "John Brown",
    date: Number(`${i + 3}`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const Email = () => {
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("large");
  const [expandable, setExpandable] = useState({});
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState("none");
  const [bottom, setBottom] = useState("bottomRight");
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const scroll = {};

  if (yScroll) {
    scroll.y = 240;
  }

  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));

  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? () => "Here is title" : undefined,
    showHeader,
    footer: showFooter ? () => "Here is footer" : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };

  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>Inbox</StyledTitle>
      <StyledCardemail>
        <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{
            marginBottom: 16,
          }}
        >
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="middle">Middle</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
        <Table
          {...tableProps}
          pagination={{
            position: [top, bottom],
          }}
          columns={tableColumns}
          dataSource={hasData ? data : []}
          scroll={scroll}
        />
      </StyledCardemail>
    </>
  );
};

export default Email;
