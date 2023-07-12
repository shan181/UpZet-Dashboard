import { ToolFilled } from "@ant-design/icons";
import { Button, Card, List } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledTitle = styled(Title)`
  display: flex;
  text-align: left;
  margin-left: 20px;
`;

const StyledCardutil = styled(Card)`
  && {
    height: 572px;
    margin: 20px;
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
    z-index: 0;
    align-items: center;
  }
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

const Utility = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <StyledCardutil>
        <StyledTitle level={3}>Site Under Maintenance</StyledTitle>
        <p>
          This site is currently undergoing maintenance. <ToolFilled />
        </p>
        <StyledButton
          type="primary"
          onClick={handleGoBack}
          style={{ marginLeft: "70px" }}
          color="#1d2c3b"
        >
          Back to Dashboard
        </StyledButton>
      </StyledCardutil>
    </>
  );
};
export default Utility;
