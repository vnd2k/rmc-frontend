import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Start from "./pages/Start";
import Layout from "./components/layout/Layout";
import Rating from "./components/companyPost/Rating";
import CreatePost from "./components/companyPost/CreatePostForm";
import ConfirmEmail from "./components/meetups/ConfirmEmail";

function App() {
  return (
    <Switch>
      <Route path="/home" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/" exact>
        <Layout>
          <Start />
        </Layout>
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/confirm">
        <ConfirmEmail />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/rating">
        <Layout>
          <Rating />
        </Layout>
      </Route>
      <Route path="/create-post">
        <Layout>
          <CreatePost />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
