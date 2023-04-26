import cardImage from './picture.png';
import boyImage from './boy.png';
import { StyledBoy, StyledCardImage, StyledRectangle } from './Home.styled';
import { Followers } from 'components/Followers/Followers';

export const Home = () => {
  return (
    <main>
      <StyledCardImage src={cardImage} alt="pictureCard" />
      <StyledRectangle></StyledRectangle>
      <StyledBoy src={boyImage} alt="boy" />
      <Followers />
    </main>
  );
};
