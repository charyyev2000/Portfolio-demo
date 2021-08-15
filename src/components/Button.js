import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const Button = styled(Link)`
  background: #162936;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 8px 14px;
  border-radius: 10px;
  width: 90px;
  height:min-content;
  // margin:0 auto;
`;
