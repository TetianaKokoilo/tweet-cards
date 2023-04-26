import { useState, useEffect } from 'react';
import {
  StyledButtonLoadMore,
  StyledCont,
  StyledInfoText,
  StyledList,
} from './Button.styled';
// import { nanoid } from 'nanoid';

export const Button = () => {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);

  const handleLoadMore = () => {
    setPage(page + 1);
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


  return (
    <>
      <StyledCont>
        <StyledList>
          {users.map(user => (
            <li key={user.id}>
              <img
                src={user.avatar}
                alt="avatar"
                width={200}
                height={200}
              ></img>
              <StyledInfoText>{user.user}</StyledInfoText>
              <StyledInfoText>Tweets: {user.tweets}</StyledInfoText>
              <StyledInfoText>Followers: {user.follows}</StyledInfoText>
            </li>
          ))}
        </StyledList>
        <StyledButtonLoadMore onClick={handleLoadMore}>Load More</StyledButtonLoadMore>
      </StyledCont>
    </>
  );
};
