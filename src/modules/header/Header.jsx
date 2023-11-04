import { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/ShopProvider";
import MobileHeader from "./mobileHeader/MobileHeader";
import MobileMenu from "./mobileHeader/MobileMenu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  // const { handleClickBtn, isOpen } = useContext(ShopContext);
  return (
    <Head className="container">
      {/* <MobileHeader open={handleClickBtn}>
        <AiOutlineMenu />
      </MobileHeader>
      {isOpen && (
        <MobileMenu>
          <MobileHeader open={handleClickBtn}>
            <AiOutlineClose />
          </MobileHeader>
        </MobileMenu>
      )} */}
      <MobileHeader />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
  position: relative;
`;
