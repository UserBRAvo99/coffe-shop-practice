import styled from "styled-components";
import { fonts, theme } from "../utils/theme";

const BtnGreen = ({ height, width, children }) => {
  return (
    <Btn height={height} width={width}>
      {children}
    </Btn>
  );
};

export default BtnGreen;

const Btn = styled.button`
  display: block;
  padding-top: ${(props) => props.height};
  padding-bottom: ${(props) => props.height};
  padding-left: ${(props) => props.width};
  padding-right: ${(props) => props.width};
  align-items: center;
  color: ${theme.color.white};
  background-color: ${theme.color.darkGreen};
  border: transparent;
  border-radius: 5px;
`;
