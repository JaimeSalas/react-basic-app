import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    // e.stopPropagation();
    e.preventDefault();
    if (username === 'admin' && password === 'test') {
      navigate('/list');
    } else {
      alert('User / paswword not valid, pssst... admin / test');
    }

  };

  // React.useEffect(() => {
  //   if (username !== '') {
  //     console.log('user name', username);
  //   }

  //   if (password !== '') {
  //     console.log('password', password);
  //   }
  // }, [username, password]);
  
  return (
      <>
        <h2>LOGIN PAGE</h2>
        <form onSubmit={handleNavigation}>
          <div style={{ textAlign: 'center' }}>
            <div>
              <label style={{ width: 100, paddingRight: 16, display: 'inline-block' }}>User Name:</label>
              <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            </div>
            <div>
              <label style={{ width: 100, paddingRight: 16, display: 'inline-block' }}>Passwrod:</label>
              <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button type='submit' style={{ marginTop: 16 }}>Login</button>
          </div>
        </form>
      </>
  );
};