import { Card, List } from "antd";
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
    height: 250px;
    width: 300px;
    margin: 20px;
    margin-bottom: 275px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;

const Authentication = () => {
  const navigate = useNavigate();
  const handleItemClick = (destination) => {
    navigate(destination);
  };

  const listItems = [
    { label: "Switch Account", destination: "/Login" },
    { label: "Change Password", destination: "/Login" },
    { label: "Change Username", destination: "/Login" },
    { label: "Register", destination: "/Signup" },
  ];
  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>Authentication</StyledTitle>
      <StyledCardauth>
        <List
          dataSource={listItems}
          renderItem={(item) => (
            <List.Item
              style={{ cursor: "pointer" }}
              onClick={() => handleItemClick(item.destination)}
            >
              {item.label}
            </List.Item>
          )}
        />
      </StyledCardauth>
    </>
  );
};
export default Authentication;
