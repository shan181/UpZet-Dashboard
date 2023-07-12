import { Card, List } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledTitle = styled(Title)`
  display: flex;
  text-align: left;
  margin-left: 20px;
`;

const StyledCardelements = styled(Card)`
  && {
    height: 680px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
const data = [
  {
    title: "Alerts",
    content:
      "When you need to show alert messages to users. " +
      " When you need a persistent static container which is closable by user actions. There are 4 types of Alert: success, info, warning, error. ",
  },
  {
    title: "Badge",
    content:
      "Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count." +
      "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it.",
  },
  {
    title: "Buttons",
    content:
      "A button means an operation (or a series of operations)." +
      "Clicking a button will trigger corresponding business logic. we provide 5 types of button.Primary button: indicate the main action," +
      "one primary button at most in one section.Default button: indicate a series of actions without priority." +
      "Dashed button: used for adding action commonly.Text button: used for the most secondary action.Link button: used for external links.",
  },
  {
    title: "Cards",
    content:
      "A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.",
  },
  {
    title: "DropDown",
    content:
      "When there are more than a few options to choose from, you can wrap them in a Dropdown. By hovering or clicking on the trigger," +
      " a dropdown menu will appear, which allows you to choose an option and execute the relevant action.",
  },
  {
    title: "Ratings",
    content: "Show evaluation." + "A quick rating operation on something.",
  },
];
const Elements = () => {
  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>UI Elements</StyledTitle>

      <StyledCardelements>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>{item.content}</Card>
            </List.Item>
          )}
        />
      </StyledCardelements>
    </>
  );
};
export default Elements;
