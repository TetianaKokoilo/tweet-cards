import { useState, useEffect } from 'react';
import {
  StyledButton,
  StyledButtonLoadMore,
  StyledCont,
  StyledFollowerContainer,
  StyledFollowers,
  StyledInfoText,
  StyledList,
  StyledTweets,
} from './Button.styled';
import { nanoid } from 'nanoid';

export const Button = () => {
  const [isFollowing, setIsFollowing] = useState(() => {
    const isFollowing = JSON.parse(localStorage.getItem('isFollowing'));
    return isFollowing !== null ? isFollowing : false;
  });
  const [followersCount, setFollowersCount] = useState(() => {
    const followersCount = JSON.parse(localStorage.getItem('followersCount'));
    return followersCount !== null ? followersCount : 100500;
  });
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };
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

  useEffect(() => {
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
    localStorage.setItem('followersCount', JSON.stringify(followersCount));
  }, [isFollowing, followersCount]);

  return (
    <>
      <StyledFollowerContainer>
        <StyledTweets>777 Tweets</StyledTweets>
        <StyledFollowers>{followersCount} Followers</StyledFollowers>
        <StyledButton
          onClick={handleClick}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </StyledButton>
      </StyledFollowerContainer>
      <StyledCont>
        <StyledList>
          {users.map(user => (
            <li key={nanoid()}>
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
