import styled from "styled-components";
import { theme, fonts } from "../../../utils/theme";

const dataMenuLink = ["Home", "About us", "Promotion", "Shop", "Contacts"];

const MobileMenu = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <List>
        {dataMenuLink.map((item) => (
          <Item key={item}>
            <Link>{item}</Link>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  display: flex;
  padding: 0 18px 28px 18px;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme.color.white};
  height: 100vh;
  width: 100vw;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0 0 0;
  margin: 0 auto;
`;
const Item = styled.li`
  display: flex;
`;
const Link = styled.a`
  font-family: ${fonts.josefin.fontFamily};
  font-size: 36px;
  font-weight: 500;
`;
