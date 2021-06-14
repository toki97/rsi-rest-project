import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "../../AppLayout";
import ProtectedRoute from "../../components/ProtectedRoute";
import routes from "../../setup/routes";
import AlbumsPage from "../AlbumsPage";
import LoginPage from "../LoginPage";
import SongsPage from "../SongsPage";
import UserAlbumsPage from "../UserAlbumsPage";
import UserSongsPage from "../UserSongsPage";

const { LOGIN, HOME, ALBUMS, USER_SONGS, USER_ALBUMS } = routes;

const AppRoutes = () => {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path={LOGIN}>
            <LoginPage />
          </Route>

          <ProtectedRoute exact path={HOME}>
            <SongsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path={USER_SONGS}>
            <UserSongsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path={ALBUMS}>
            <AlbumsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path={USER_ALBUMS}>
            <UserAlbumsPage />
          </ProtectedRoute>
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default AppRoutes;
