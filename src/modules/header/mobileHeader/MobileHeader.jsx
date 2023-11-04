import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";
import styled from "styled-components";
import Logo from "../../../shared/Logo";
import { fonts } from "../../../utils/theme";
import BtnOpenMenu from "./BtnOpenMenu";

const MobileHeader = () => {
  const { eventW } = useContext(ShopContext);
  return (
    <Wrapper>
      <BtnOpenMenu eventW={eventW} />
      <WrapperTittle>
        <Logo />
        <Tittle>Samwayle</Tittle>
      </WrapperTittle>
    </Wrapper>
  );
};

export default MobileHeader;

const Wrapper = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 40px;
  align-items: baseline;
`;

const WrapperTittle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  & svg {
    width: 45px;
    height: 28px;
  }
`;

const Tittle = styled.h1`
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 28px;
  font-weight: ${fonts.cedarville.fontWeight};
`;
