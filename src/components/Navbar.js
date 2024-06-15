import React, { useState } from 'react';

const NavBar = ({ userRole, toggleUserRole }) => {
  const [dropdownVisibility, setDropdownVisibility] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const toggleDropdown = (option) => {
    setDropdownVisibility({
      ...dropdownVisibility,
      [option]: !dropdownVisibility[option],
    });
  };

  const handleOptionClick = (option) => {
    toggleDropdown(option);
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem} onClick={() => handleOptionClick('option1')}>
          Option 1
          {dropdownVisibility.option1 && (
            <ul style={styles.dropdown}>
              <li onClick={toggleUserRole}>
                Switch to {userRole === 'viewer' ? 'Editor' : 'Viewer'}
              </li>
              <li>Option 1.2</li>
              <li>Option 1.3</li>
            </ul>
          )}
        </li>
        <li style={styles.navItem} onClick={() => handleOptionClick('option2')}>
          Option 2
          {dropdownVisibility.option2 && (
            <ul style={styles.dropdown}>
              <li>Option 2.1</li>
              <li>Option 2.2</li>
              <li>Option 2.3</li>
            </ul>
          )}
        </li>
        <li style={styles.navItem} onClick={() => handleOptionClick('option3')}>
          Option 3
          {dropdownVisibility.option3 && (
            <ul style={styles.dropdown}>
              <li>Option 3.1</li>
              <li>Option 3.2</li>
              <li>Option 3.3</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#eee',
    padding: '10px',
    textAlign: 'center',
    height: '50px',
    margin: '0 auto',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 20px',
    position: 'relative',
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    listStyleType: 'none',
    padding: 0,
    marginTop: '5px',
    left: 0,
  },
};

export default NavBar;
