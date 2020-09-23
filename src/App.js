import React from 'react';
import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import Layout from './containers/Layout';
import Header from './containers/Header';
import Login from './containers/Login';

const App = () => {
  const { isLoggedIn } = useJwtAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Layout />
    </div>
  );
};

export default App;
