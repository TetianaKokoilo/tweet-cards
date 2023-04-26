// import { Button } from "./Button/Button";
import { ReactComponent as Logo } from './Logo.svg';
import { StyledContainer, StyledHeader, Link } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";

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
          <Link to="/about">Tweets</Link>
        </nav>
      </StyledHeader>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </StyledContainer>
  );
};
