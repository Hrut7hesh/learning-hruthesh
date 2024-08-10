import React from 'react';

const Log = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <div>
      {!isLoggedIn ? (
        <div>
            <h1>Login</h1>
            <button onClick={onLogin}>Login</button>
        </div>
      ) : (
        <div>
            <h1>Logout</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Log;
