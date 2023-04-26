// import { Button } from "./Button/Button";
import { ReactComponent as Logo } from './Logo.svg';
import { StyledContainer, StyledHeader, Link } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Tweets } from 'pages/Tweets/Tweets';

// import { Link } from "react-router-dom";

export const App = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <Logo />
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
      </Routes>
    </StyledContainer>
  );
};
