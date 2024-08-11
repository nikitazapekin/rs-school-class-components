import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { clearStoredElementsActionCreator } from '../../store/action-creators/clearStoredElementsActionCreator';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../store/selectors/getStoredElements';

const StoredUsersButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(storedUsersSelector);
  const [url, setUrl] = useState<string | undefined>();

  const handleClear = () => {
    dispatch(clearStoredElementsActionCreator());
  };

  const handleDownload = () => {
    if (users.length === 0) return;

    const titleKeys = Object.keys(users[0]);
    const refinedData = [titleKeys];
    users.forEach((item) => {
      refinedData.push(Object.values(item).map((value) => String(value)));
    });

    let csvContent = '';
    refinedData.forEach((row) => {
      csvContent += row.join(';') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    setUrl(url);
  };

  return (
    <div style={styles.panel}  data-testid="stored-users-button">
      <p style={styles.text}>You chose {users.length} users</p>
      <div style={styles.buttons}>
        <a
          style={{ ...styles.button, ...styles.downloadHover }}
          href={url}
          download={`${users.length}__users.csv`}
          onClick={handleDownload}
        >
          download
        </a>
        <button
          style={{ ...styles.button, ...styles.clearButton }}
          onClick={handleClear}
        >
          Unselect all
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  panel: {
    padding: '17px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 111,
    backgroundColor: 'rgb(167, 158, 158)',
    borderRadius: '20px',
  },
  buttons: {
    display: 'flex',
    columnGap: '20px',
  },
  button: {
    cursor: 'pointer',
    zIndex: 111,
    padding: '7px',
    fontSize: '35px',
    maxWidth: '300px',
    transition: '1s',
    textDecoration: 'none',
    color: 'black',
  },
  text: {
    fontSize: '32px',
  },
  downloadHover: {
    backgroundColor: 'rgb(90, 90, 190)',
    color: '#fff',
  },
  clearButton: {
    backgroundColor: 'rgb(158, 51, 51)',
    color: '#fff',
  },
};

export default StoredUsersButton;
 