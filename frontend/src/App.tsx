import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ComposePage } from './pages/ComposePage';
import { FeedPage } from './pages/FeedPage';
import { LoginPage } from './pages/LoginPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { AuthContextProvider } from './support/useAuth';

export function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <FeedPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/new">
            <ComposePage />
          </Route>
          <Route exact path="/user/:id">
            <UserProfilePage />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}
