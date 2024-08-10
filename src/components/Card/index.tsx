import React from 'react';
import { useAppDispatch } from "../../hooks/redux";
import { AddElementToStorage } from "../../store/action-creators/addElementToStorage";
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../store/selectors/getStoredElements';
import { UserItem } from './types';
import { getThemeSelector } from '../../store/selectors/getTheme';
import { useNavigate, useLocation } from '@remix-run/react';
import { paramsSelector } from '../../store/selectors/getSearchParams';
import { CSSProperties } from 'react';

const Card: React.FC<UserItem> = ({ user }) => {
  const dispatch = useAppDispatch();
  const isDark = useSelector(getThemeSelector);
  const users = useSelector(storedUsersSelector);
  const params = useSelector(paramsSelector);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckboxChange = () => {
    dispatch(AddElementToStorage(user));
  };

  const handleDetailsClick = () => {
    const queryParams = new URLSearchParams();
    queryParams.append('page', String(params.offset));
    if (params.query) {
      queryParams.append('query', params.query);
    }
    queryParams.append('user', user.login);

    navigate(`/details?${queryParams.toString()}`, { state: { from: location } });
  };

  return (
    <div style={styles.userLink}>
      <div style={{ ...styles.user, ...(isDark ? styles.userDark : {}) }}>
        <img className="user__logo" src={user.avatar_url} alt="user" style={styles.userLogo} />
        <div style={styles.userContent}>
          <p style={styles.userLogin}>{user.login}</p>
          <input
            type="checkbox"
            style={styles.userCheckbox}
            onChange={handleCheckboxChange}
            checked={users && users.some((storedUser) => user.id === storedUser.id)}
            readOnly
          />
          <button onClick={handleDetailsClick} style={styles.userDetails}>
            Show details
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  userLink: {
    textDecoration: 'none',
    color: '#000',
  },
  user: {
    padding: '40px 20px',
    fontSize: '32px',
    backgroundColor: 'rgb(201, 174, 124)',
    display: 'flex',
    transition: '0.5s ease-in-out',
    alignItems: 'flex-start',
    cursor: 'pointer',
  },
  userLogo: {
    borderRadius: '50%',
    maxWidth: '300px',
  },
  userDark: {
    backgroundColor: 'rgb(73, 71, 71)',
    color: '#fff',
  },
  userContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    rowGap: '20px',
    marginLeft: '20px',
  },
  userLogin: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  userCheckbox: {
    position: 'relative',
    width: '20px',
    height: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  },
  userCheckboxHover: {
    backgroundColor: '#f0f0f0',
  },
  userDetails: {
    fontSize: '24px',
    cursor: 'pointer',
    padding: '10px 25px',
    transition: '1s',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#000',
  },
  userDetailsHover: {
    backgroundColor: 'rgb(90, 90, 190)',
    color: '#fff',
  },
};

export default Card;
 