import styled from "styled-components";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <Head className="container">
      <MobileMenu />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
`;
