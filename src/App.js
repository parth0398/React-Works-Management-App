import React, { useState } from 'react';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Works from './components/works';

const App = () => {
  const [userRole, setUserRole] = useState('viewer'); 
  const [searchText, setSearchText] = useState('');

  const toggleUserRole = () => {
    setUserRole(prevRole => (prevRole === 'viewer' ? 'editor' : 'viewer'));
  };
  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <NavBar userRole={userRole} toggleUserRole={toggleUserRole} />
      <SearchBar onSearch={handleSearch}/>
      <Works userRole={userRole} searchText={searchText}/>
    </div>
  );
};

export default App;
