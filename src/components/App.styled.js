import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`

  background: #5736a3;
  width: 380px;
  height: 100%;
  margin: 0 auto;
  display: block;
  margin-top: 10px;
`;
export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #EBD8FF;
  font-weight: 500;

  &.active {
    color: #373737;
    background-color:  #FAE94E;
  }
`;
