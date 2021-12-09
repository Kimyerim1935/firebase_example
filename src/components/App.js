import React, {useState} from 'react';
import Router from 'components/Router';
import {authService} from 'my_firebase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)

  return (
    <div>
      <Router isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
