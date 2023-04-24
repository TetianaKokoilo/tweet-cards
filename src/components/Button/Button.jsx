import { useState, useEffect } from 'react';
import { StyledButton, StyledFollowerContainer, StyledFollowers, StyledTweets } from './Button.styled';

export const Button = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(100500);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };

  // Ефект для збереження стану кнопки після оновлення сторінки
  useEffect(() => {
    const isFollowing = JSON.parse(localStorage.getItem('isFollowing'));
    const followersCount = JSON.parse(localStorage.getItem('followersCount'));

    if (isFollowing !== null) {
      setIsFollowing(isFollowing);
    }
    if (followersCount !== null) {
      setFollowersCount(followersCount);
    }
  }, []);

  // Ефект для збереження стану кнопки перед закриттям сторінки
  useEffect(() => {
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
    localStorage.setItem('followersCount', JSON.stringify(followersCount));
  }, [isFollowing, followersCount]);

  return (
      <StyledFollowerContainer>
      <StyledTweets>777 TWEETS</StyledTweets>
      <StyledFollowers>{followersCount} FOLLOWERS</StyledFollowers>
      <StyledButton onClick={handleClick} style={{ backgroundColor: isFollowing ? "#5CD3A8" : "#EBD8FF" }}>
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </StyledButton>
    </StyledFollowerContainer>
  );
};
