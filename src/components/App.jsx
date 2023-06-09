import { ReactComponent as Logo } from './Logo.svg';
import { StyledContainer, StyledHeader, Link } from './App.styled';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Tweets } from 'pages/Tweets/Tweets';

export const App = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <div>
          {' '}
          <Logo />
        </div>

        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </StyledHeader>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tweets" element={<Tweets />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </StyledContainer>
  );
};
