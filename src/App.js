import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/header';
import HomePage from './pages/homePage';
import FormPage from './pages/formPage';

import store from './store/rootStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/RegistrationForm/:id?">
                <FormPage />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
