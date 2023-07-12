import {
  AmazonCircleFilled,
  AndroidFilled,
  AppleFilled,
  ArrowsAltOutlined,
  BorderRightOutlined,
  CameraFilled,
  ChromeFilled,
  CopyFilled,
  DeleteFilled,
  DropboxCircleFilled,
  EditFilled,
  EyeInvisibleFilled,
  FireFilled,
  FolderAddFilled,
  FundFilled,
  GithubFilled,
  HeartFilled,
  HighlightFilled,
  HomeFilled,
  Html5Filled,
  MenuFoldOutlined,
  PieChartFilled,
  PlusSquareFilled,
  RetweetOutlined,
  ShrinkOutlined,
  SlidersFilled,
  SnippetsFilled,
  StepBackwardOutlined,
  StepForwardOutlined,
  UpCircleOutlined,
  WarningFilled,
  YahooFilled,
} from "@ant-design/icons";
import { Card, Col, Divider, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledTitle = styled(Title)`
  display: flex;
  text-align: left;
  margin-left: 20px;
`;

const StyledCardauth = styled(Card)`
  && {
    height: 550px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;

const style = {
  padding: "8px 0",
};

const Icons = () => {
  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>Icons</StyledTitle>
      <StyledCardauth>
        <>
          <Divider orientation="left">Use class className ="iconName"</Divider>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <StepBackwardOutlined />
                StepBackwardOutlined
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <StepForwardOutlined />
                StepForwardOutlined
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <ShrinkOutlined />
                ShrinkOutlined
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <ArrowsAltOutlined />
                ArrowsAltOutlined
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <UpCircleOutlined /> UpCircleOutlined
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <RetweetOutlined />
                RetweetOutlined
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <MenuFoldOutlined />
                MenuFoldOutlined
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <BorderRightOutlined />
                BorderRightOutlined
              </Space>
            </Col>
          </Row>
          <Row gutter={[16, 24]} style={style}>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <WarningFilled />
                WarningFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <PlusSquareFilled />
                PlusSquareFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <EditFilled />
                EditFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <CopyFilled />
                CopyFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <DeleteFilled />
                DeleteFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <SnippetsFilled />
                SnippetsFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <HighlightFilled />
                HighlightFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <PieChartFilled />
                PieChartFilled
              </Space>
            </Col>
          </Row>
          <Row gutter={[16, 24]} style={style}>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <FundFilled />
                FundFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <SlidersFilled />
                SlidersFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <AndroidFilled />
                AndroidFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <AppleFilled />
                AppleFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <ChromeFilled />
                ChromeFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <Html5Filled />
                Html5Filled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <GithubFilled />
                GithubFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <YahooFilled />
                YahooFilled
              </Space>
            </Col>
          </Row>
          <Row gutter={[16, 24]} style={style}>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <AmazonCircleFilled />
                AmazonCircleFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <CameraFilled />
                CameraFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <DropboxCircleFilled />
                DropboxCircleFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <EyeInvisibleFilled />
                EyeInvisibleFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <FireFilled />
                FireFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <FolderAddFilled />
                FolderAddFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <HomeFilled />
                HomeFilled
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space style={style}>
                <HeartFilled />
                HeartFilled
              </Space>
            </Col>
          </Row>
        </>
      </StyledCardauth>
    </>
  );
};
export default Icons;
