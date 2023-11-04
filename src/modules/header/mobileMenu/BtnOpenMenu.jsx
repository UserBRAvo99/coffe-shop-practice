import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const BtnOpenMenu = () => {
  return (
    <Btn>
      <AiOutlineMenu />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="21"
        viewBox="0 0 27 21"
        fill="none"
      >
        <rect width="27" height="1.61538" rx="0.807692" fill="#141414" />
        <rect
          y="9.69214"
          width="27"
          height="1.61538"
          rx="0.807692"
          fill="#141414"
        />
        <rect
          y="19.3845"
          width="27"
          height="1.61538"
          rx="0.807692"
          fill="#141414"
        />
      </svg> */}
    </Btn>
  );
};

export default BtnOpenMenu;

const Btn = styled.button`
  display: flex;
  padding: 0;
  border: transparent;
  background-color: transparent;
  svg {
    width: 32px;
    height: 26px;
  }
`;
