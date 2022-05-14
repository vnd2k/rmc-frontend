import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Start from "./pages/Start";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/home" exact>
        <Layout>
          <Start />
        </Layout>
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
    </Switch>
  );
}

export default App;
