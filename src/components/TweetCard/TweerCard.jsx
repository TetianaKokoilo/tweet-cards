import { StyledBoy, StyledCardImage, StyledContainer, StyledLogo, StyledRectangle } from './TweetCard.styled';
import { ReactComponent as Logo } from './Logo.svg';
import cardImage from './picture.png';
import boyImage from './boy.png';

export const TweetCard = () => {
  return (
    <StyledContainer>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledCardImage src={cardImage} alt="pictureCard" />
        <StyledRectangle></StyledRectangle>
        <StyledBoy src={boyImage} alt="boy" />
{/* 
      <p>Tweet</p> */}
    </StyledContainer>
  );
};
