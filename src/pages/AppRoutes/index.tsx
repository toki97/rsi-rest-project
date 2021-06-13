import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "../../AppLayout";
import routes from "../../setup/routes";
import LoginPage from "../LoginPage";
import SongsPage from "../SongsPage";

const { LOGIN, HOME } = routes;

const AppRoutes = () => {
  return (
    <AppLayout>
      <Router>
        <Switch>
          <Route exact path={LOGIN}>
            <LoginPage />
          </Route>

          <Route exact path={HOME}>
            <SongsPage />
          </Route>
        </Switch>
      </Router>
    </AppLayout>
  );
};

export default AppRoutes;
