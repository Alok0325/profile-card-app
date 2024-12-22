import React, { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';

export const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {userData ? <ProfileCard user={userData} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
