import styled from "styled-components";
import Logo from "../../shared/Logo";

const MobileMenu = () => {
  return (
    <Wrapper>
      <button>Open</button>
      <WrapperTittle>
        <Logo />
        <Tittle>Samwayle</Tittle>
      </WrapperTittle>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 40px;
`;

const WrapperTittle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const Tittle = styled.h1`
  font-family: Cedarville Cursive;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
