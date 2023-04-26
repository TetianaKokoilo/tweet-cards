import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 9.36%,
    #4c23a7 14.61%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
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
  padding-top: 20px;
  padding-left: 20px;

  > nav {
    display: flex;
    margin-right: 5px;
  }
`;
export const Link = styled(NavLink)`
  width: 75px;
  height: 20px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ebd8ff;
  text-decoration: none;
  text-align: center;
  padding: 7px;

  &.active {
    color: #373737;
    background-color: #fae94e;
  }
`;
