import React, { useState } from 'react';
import './App.css'; // Importing CSS file for styles

function isValidGUID(guid) {
  const guidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return guidPattern.test(guid);
}

function App() {
  const [userId, setUserId] = useState('');
  const [isValidGuid, setIsValidGuid] = useState(false);

  const handleSearch = () => {
    // You can perform actions with the userId here, such as fetching user data
    console.log('Searching for user with ID:', userId);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserId(value);
    setIsValidGuid(isValidGUID(value)); // Check if the entered value is a valid GUID
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>IBX Studios Developer Dashboard</h1>
        <p>This tool allows IBX Studios' developers to manage user accounts.</p>
        <div className="search-container">
          <input
            type="text"
            value={userId}
            onChange={handleInputChange}
            placeholder="Enter user ID"
            className="input-field"
          />
          <button onClick={handleSearch} disabled={!isValidGuid} className="search-button">Search</button>
        </div>
        {!isValidGuid && <p className="error-message">Please enter a valid GUID. <a href="https://learn.microsoft.com/en-us/windows/win32/api/guiddef/ns-guiddef-guid">Need Help?</a> </p>}
      </header>
    </div>
  );
}

export default App;
