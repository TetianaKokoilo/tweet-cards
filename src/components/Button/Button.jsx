
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledButtonBack,
  StyledButtonLoadMore,
  StyledCont,
  StyledContBack,
  StyledContLoadMore,
  StyledDropdown,
  StyledFilter,
  StyledInfoText,
  StyledList,
  StyledOption,
  StyledSelect,
} from './Button.styled';
import { nanoid } from 'nanoid';

export const Button = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('show all');
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://64478ff750c2533744281a24.mockapi.io/api/v1/users?page=${page}&limit=3`
      );
      const data = await response.json();
      setUsers(prevUsers => {
        const newUsers = [...prevUsers, ...data];
        return Array.from(new Set(newUsers.map(newUser => newUser.id))).map(
          id => {
            return newUsers.find(newUser => newUser.id === id);
          }
        );
      });
    };
    fetchUsers();
  }, [page]);

  const handleBack = () => {
    navigate('/');
  };
  const filterUsers = (users, filter) => {
    switch (filter) {
      case 'follow':
        return users.filter(user => user.follows);
      case 'followings':
        return users.filter(user => user.followings);
      default:
        return users;
    }
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredUsers = filterUsers(users, filter);

  return (
    <>
      <StyledCont>
        <StyledDropdown>
          <StyledFilter htmlfor="filter">Filter:</StyledFilter>
          <StyledSelect id="filter" value={filter} onChange={handleFilterChange}>
            <StyledOption value="show all">Show All</StyledOption>
            <StyledOption value="follow">Follow</StyledOption>
            <StyledOption value="followings">Followings</StyledOption>
          </StyledSelect>
        </StyledDropdown>
        <StyledList>
          {filteredUsers.map(user => (
            <li key={nanoid()}>
              <img src={user.avatar} alt="avatar" width={200} height={200} />
              <StyledInfoText>{user.user}</StyledInfoText>
              <StyledInfoText>Tweets: {user.tweets}</StyledInfoText>
              <StyledInfoText>Followers: {user.follows}</StyledInfoText>
            </li>
          ))}
        </StyledList>

        <StyledContBack>
          <StyledButtonBack onClick={handleBack}>Go Back</StyledButtonBack>
        </StyledContBack>
        {users.length > 0 && (
          <StyledContLoadMore>
            <StyledButtonLoadMore onClick={handleLoadMore}>
              Load More
            </StyledButtonLoadMore>
          </StyledContLoadMore>
        )}
      </StyledCont>
    </>
  );
};
