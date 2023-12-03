// LoginControl.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginControl() {
  const [login, setIsLogged] = useState(false);

  /*const handleLoginChange = (isLoggedIn) => {
    setIsLogged(isLoggedIn);
  };
*/
  return (
    <div className="login">
      <ul>
        <li>
          <button>
          {login ? <Link to="/Home">로그아웃</Link> : <Link to="/LoginPage">로그인</Link>}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LoginControl;