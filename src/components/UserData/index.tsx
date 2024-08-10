
import React, { useState } from 'react';
import Spinner from '../Spinner';
import { useSelector } from 'react-redux';
import { isLoadingUserDataSelector } from '@/store/selectors/isLoadingUserData';
import { getThemeSelector } from '@/store/selectors/getTheme';
import { clickedUserSelector } from '@/store/selectors/getClickedElement';
import { paramsSelector } from '@/store/selectors/getSearchParams';
import { Link } from '@remix-run/react';

const UserData: React.FC = () => {
  const isDark = useSelector(getThemeSelector);
  const params = useSelector(paramsSelector);
  const clickedUser = useSelector(clickedUserSelector);
  const loading = useSelector(isLoadingUserDataSelector);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <aside
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '40%',
        backgroundColor: isDark ? 'rgb(80, 75, 75)' : 'rgb(172, 164, 154)',
        height: '100vh',
        transition: '1s',
      }}
    >
      {loading && <Spinner data-testid="spinner" />}
      <div>
        <h2>{clickedUser.login}</h2>
        <img
          src={clickedUser.avatar_url}
          alt={`${clickedUser.login}'s avatar`}
          style={{
            borderRadius: '50%',
            maxWidth: '100px',  
          }}
        />
        <p>ID: {clickedUser.id}</p>
        <p>Type: {clickedUser.type}</p>
      </div>
      <Link
        to={`/?page=${params.offset}${params.query ? `&query=${params.query}` : ''}`}
        style={{
          marginTop: '30px',
          padding: '20px',
          maxWidth: '90%',
          width: '100%',
          cursor: 'pointer',
          borderRadius: '20px',
          fontSize: '30px',
          textAlign: 'center',
          textDecoration: 'none',
          color: isHovering ? '#fff' : '#000',
          backgroundColor: isHovering ? 'rgb(90, 90, 190)' : 'transparent',
          transition: '1s',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Close
      </Link>
    </aside>
  );
};

export default UserData;
 