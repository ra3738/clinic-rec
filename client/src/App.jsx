import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthenticatedApp from './components/AuthenticatedApp';
import Header from './components/margin/Header';
import HeaderStatic from './components/margin/HeaderStatic';
import { useAuth0 } from './authentication/react-auth0-spa';
import LoadingMessage from './components/common/LoadingMesage';

const App = () => {
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return (
      <>
        <HeaderStatic />
        <LoadingMessage heading='Please wait' body='Loading...' />
      </>
    );
  }

  return (
    <Provider store={store}>
      <Router>
        <Header />
        {isAuthenticated && (<AuthenticatedApp />)}
      </Router>
    </Provider>
  );
};

export default App;
