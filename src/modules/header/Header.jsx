import styled from "styled-components";
import MobileHeader from "./mobileMenu/MobilHeader";

const Header = () => {
  return (
    <Head className="container">
      <MobileHeader />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
`;
