import styled from 'styled-components';

export const StyledButtonLoadMore = styled.button`
  background: #fae94e;
  width: 196px;
  height: 50px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0px;
`;
export const StyledInfoText = styled.p`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const StyledCont = styled.div`
  width: 380px;
`;
export const StyledButtonBack = styled.button`
  background: #ebd8ff;
  width: 196px;
  height: 50px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
export const StyledContLoadMore = styled.div`
  padding-bottom: 30px;
`;
export const StyledContBack = styled.div`
  margin-bottom: 10px;
`;
export const StyledDropdown = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #fae94e;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 60px;
`;
export const StyledFilter = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
`;
export const StyledSelect = styled.select`
  background: transparent;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* text-transform: uppercase; */
  color: #ebd8ff;
  padding-left: 30px;
`;
export const StyledOption = styled.option`
  background: #ebd8ff;
  color: #373737;
  width: 150px;

  &:focus,
  :hover {
    background: #fae94e;
  }
`;
