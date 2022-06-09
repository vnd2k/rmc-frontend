import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Start from "./pages/Start";
import Layout from "./components/layout/Layout";
import Rating from "./components/companyPost/Rating";
import CreatePost from "./components/companyPost/CreatePostForm";
import ConfirmEmail from "./components/meetups/ConfirmEmail";
import EditUser from "./components/user/EditMember";
import MemberProfile from "./components/user/MemberProfile";
import MemberRatings from "./components/user/MemberRatings";
import MemberSaved from "./components/user/MemberSaved";

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
      <Route path="/account">
        <Layout>
          <EditUser />
        </Layout>
      </Route>
      <Route path="/profile">
        <Layout>
          <EditUser>
            <MemberProfile />
          </EditUser>
        </Layout>
      </Route>
      <Route path="/ratings">
        <Layout>
          <EditUser>
            <MemberRatings />
          </EditUser>
        </Layout>
      </Route>
      <Route path="/saved">
        <Layout>
          <EditUser>
            <MemberSaved />
          </EditUser>
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
