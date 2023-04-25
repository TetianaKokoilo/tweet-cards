import styled from 'styled-components';

export const StyledContainer = styled.div`
  background: #5736a3;
  width: 380px;
  height: 100%;
  margin: 0 auto;
  display: block;
`;
export const StyledRectangle = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  @media (min-width: 768px) {
    left: 194px;
  }
  @media (min-width: 1024px) {
    left: 322px;
  }
  @media (min-width: 1440px) {
    left: 578px;
  }
`;
export const StyledBoy = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  right: 150px;
  top: 178px;
  border-radius: 85.9232px;
  @media (min-width: 768px) {
    left: 350px;
  }
  @media (min-width: 1024px) {
    left: 480px;
  }
@media (min-width: 1440px) {
    left: 730px;
  }
`;
export const StyledLogo = styled.div`
  margin-left: 20px;
  padding-top: 20px;
`;

export const StyledCardImage = styled.img`
  margin-left: 36px;
  position: absolute;
  top: 28px;
`;