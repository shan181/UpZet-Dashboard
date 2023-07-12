import {
  BellOutlined,
  CalendarFilled,
  CaretDownOutlined,
  DeleteFilled,
  DropboxCircleFilled,
  FileExclamationFilled,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GithubFilled,
  HomeFilled,
  LockOutlined,
  LogoutOutlined,
  MailFilled,
  MehFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartFilled,
  SettingFilled,
  ShoppingFilled,
  SnippetsFilled,
  TableOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Dropdown,
  Layout,
  Menu,
  Popover,
  Space,
  notification,
  theme,
  Avatar,
  List,
} from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import styled from "styled-components";
import myImage from "../assets/am.png";
import logoimg from "../assets/logo4.png";
import slogoimg from "../assets/slogo4.png";
import ProfileAv from "../assets/AdminAv.jpg";

import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;

const StyledLayout = styled(Layout)`
  .ant-layout {
    min-height: 100vh;
  }
`;

const StyledSider = styled(Sider)`
  .ant-layout-sider-children {
    background-color: #1d2c3b;
    position: sticky;
    top: 0;
    align-self: flex-start;
    z-index: 2;
    height: calc(100vh);
  }
  && .ant-menu-dark {
    background-color: #1d2c3b;
  }
  .ant-layout-sider {
    width: 100%;
  }
`;

const StyledHeader = styled(Header)`
  && {
    background-color: white;
    display: flex;
    justify-content: space-between; /* Align items in the center */
    align-items: center;
    width: 100%;
    padding-right: 12px; /* Remove the padding on the right side */
    position: sticky;
    top: 0;
    align-self: flex-start;
    z-index: 1;
  }
`;

const StyledFooter = styled.footer`
  margin-top: 20px;
  background-color: white;
  color: black;
  padding: 16px;
  text-align: center;
`;

const IconImage = styled.div`
  flex-shrink: 0;
  margin-left: 400px;
  margin-right: 25px;
  background-image: url(${myImage});
  background-size: cover;
  width: 25px;
  height: 16px;
  cursor: pointer;
`;

const LogoImage = styled.div`
  background-image: url(${logoimg});
  background-size: cover;
  width: 100%;
  height: 64px;
  cursor: pointer;
`;

const SlogoImage = styled.div`
  background-image: url(${slogoimg});
  background-size: cover;
  width: 100%;
  height: 64px;
  cursor: pointer;
`;

const IconButton = styled(Button)`
  && {
    background-color: transparent !important; /* Remove the background color */
    &:hover {
      background-color: transparent !important; /* Remove the hover background color */
    }
  }
  font-size: 16px;
  width: 64px;
  height: 64px;
  margin-right: 20px;
`;

const ContentContainer = styled.div`
  overflow: auto;
`;

const onSearch = (value) => console.log(value);

const Main = () => {
  const nevigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification Data Added`,
      description: "Data Added in the table successfully ",
      placement,
    });
  };
  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!fullscreen) {
      // Enter fullscreen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setFullscreen(!fullscreen);
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const text = <span>Share to:</span>;
  const content = (
    <Space>
      <Button type="text">
        GitHub <GithubFilled />
      </Button>
      <Button type="text">
        BitBucket <DeleteFilled />
      </Button>
      <Button type="text">
        DropBox <DropboxCircleFilled />
      </Button>
    </Space>
  );
  const data = [
    {
      title: "Zeeshan",
    },
    {
      title: "Bilal",
    },
    {
      title: "Ali",
    },
    {
      title: "Farhad",
    },
  ];
  const text2 = (
    <span>
      Notification <a style={{ float: "right" }}> view all</a>
    </span>
  );
  const content2 = (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
              />
            }
            title={item.title}
            description={
              <>
                <p>
                  hello! how Are you
                  <br /> 1 day ago
                </p>
              </>
            }
          />
        </List.Item>
      )}
    />
  );
  const items = [
    {
      icon: <UserOutlined />,
      label: <a href="#">Profile</a>,
      key: "0",
    },
    {
      icon: <WalletOutlined />,
      label: <a href="#">My Wallet</a>,
      key: "1",
    },
    {
      icon: <SettingFilled />,
      label: <a href="#">Settings</a>,
      key: "2",
    },
    {
      icon: <LockOutlined />,
      label: <a href="#">Lock Screen</a>,
      key: "3",
    },
    {
      type: "divider",
    },
    {
      onClick: () => nevigate("/Login"),
      icon: <LogoutOutlined />,
      label: "LogOut",
      key: "4",
    },
  ];
  return (
    <StyledLayout>
      <StyledSider trigger={null} collapsible collapsed={collapsed}>
        {collapsed ? <SlogoImage /> : <LogoImage />}

        <Space className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <HomeFilled />,
              label: "Dashboard",
              onClick: () => nevigate("/"),
            },
            {
              key: "2",
              icon: <CalendarFilled />,
              label: "Calander",
              onClick: () => nevigate("/calander"),
            },
            {
              key: "3",
              icon: <MailFilled />,
              label: "Email",
              onClick: () => nevigate("/email"),
            },
            {
              key: "4",
              icon: <UserOutlined />,
              label: "Authentication",
              onClick: () => nevigate("/authentication"),
            },
            {
              key: "5",
              icon: <FileExclamationFilled />,
              label: "Utility",
              onClick: () => nevigate("/utility"),
            },
            {
              key: "6",
              icon: <ShoppingFilled />,
              label: "UI Elements",
              onClick: () => nevigate("/elements"),
            },
            {
              key: "7",
              icon: <SnippetsFilled />,
              label: "Forms",
              onClick: () => nevigate("/forms"),
            },
            {
              key: "8",
              icon: <TableOutlined />,
              label: "Tables",
              onClick: () => nevigate("/tables"),
            },
            {
              key: "9",
              icon: <PieChartFilled />,
              label: "Charts",
              onClick: () => nevigate("/charts"),
            },
            {
              key: "10",
              icon: <MehFilled />,
              label: "Icons",
              onClick: () => nevigate("/icons"),
            },
          ]}
        />
      </StyledSider>
      <StyledLayout>
        <StyledHeader>
          {contextHolder}
          <IconButton
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Search placeholder="Search...." onSearch={onSearch} title="Search" />
          <IconImage title="Country" />
          <Popover
            placement="bottomRight"
            title={text}
            content={content}
            trigger="click"
          >
            <IconButton type="text" icon={<TableOutlined />} title="Share" />
          </Popover>

          <IconButton
            title="Screen"
            type="text"
            icon={
              fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />
            }
            onClick={toggleFullscreen}
          />
          <Popover
            placement="bottomRight"
            title={text2}
            content={content2}
            trigger="click"
          >
            <IconButton
              title="Notification"
              type="text"
              icon={
                <Badge size="small" count="5">
                  <BellOutlined />
                </Badge>
              }
            />
          </Popover>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{ color: "black", marginLeft: 5 }}>
                <Avatar src={ProfileAv} title="Profile" />
                Admin
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>
        </StyledHeader>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
        <StyledFooter>2023 © Upzet.....Crafted with ❤ by Zeeshan</StyledFooter>
      </StyledLayout>
    </StyledLayout>
  );
};
export default Main;
