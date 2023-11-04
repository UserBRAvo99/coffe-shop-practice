import styled from "styled-components";
import { theme } from "../utils/theme";

const BtnGreen = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default BtnGreen;

const Btn = styled.button`
  display: flex;
  align-items: center;
  background-color: ${theme.color.darkGreen};
`;
