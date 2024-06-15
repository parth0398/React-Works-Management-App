import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    onSearch(searchText); 
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
        onChange={handleInputChange}
      />
      <button
        style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        🔍
      </button>
    </div>
  );
};

const styles = {
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '420px',
    margin: '20px auto',
  },
  input: {
    width: '100%',
    padding: '10px 50px 10px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  },
  button: {
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default SearchBar;
