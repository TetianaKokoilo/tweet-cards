import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledButtonBack,
  StyledButtonLoadMore,
  StyledCont,
  StyledContBack,
  StyledContLoadMore,
  StyledInfoText,
  StyledList,
} from './Button.styled';

export const Button = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  const handleLoadMore = () => {
    setPage(page + 1);
    setShowBackButton(true);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://64478ff750c2533744281a24.mockapi.io/api/v1/users?page=${page}&limit=3`
      );
      const data = await response.json();
      setUsers(prevUsers => [...prevUsers, ...data]);
    };
    fetchUsers();
  }, [page]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <StyledCont>
        <StyledList>
          {users.map(user => (
            <li key={user.id}>
              <img src={user.avatar} alt="avatar" width={200} height={200} />
              <StyledInfoText>{user.user}</StyledInfoText>
              <StyledInfoText>Tweets: {user.tweets}</StyledInfoText>
              <StyledInfoText>Followers: {user.follows}</StyledInfoText>
            </li>
          ))}
        </StyledList>

        {showBackButton && (
          <StyledContBack>
            {' '}
            <StyledButtonBack onClick={handleBack}>Go Back</StyledButtonBack>
          </StyledContBack>
        )}
        <StyledContLoadMore>
          {' '}
          <StyledButtonLoadMore onClick={handleLoadMore}>
            Load More
          </StyledButtonLoadMore>
        </StyledContLoadMore>
      </StyledCont>
    </>
  );
};
