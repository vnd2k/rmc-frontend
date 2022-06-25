import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../src/stores/auth/authSlice";
import { getMemberInfo } from "../src/stores/member/memberSlice";
import { getCompanyInfo } from "../src/stores/company/companySlice";
import Company from "./pages/Company";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Start from "./pages/Start";
import Layout from "./components/layout/Layout";
import Rating from "./components/companyPost/Rating";
import ConfirmEmail from "./components/auth/ConfirmEmail";
import EditMember from "./components/user/member/EditMember";
import MemberProfile from "./components/user/member/MemberProfile";
import MemberRatings from "./components/user/member/MemberRatings";
import MemberSaved from "./components/user/member/MemberSaved";
import authStorageService from "./stores/authStorageService";
import EditCompany from "./components/user/company/EditCompany";
import CompanyProfile from "./components/user/company/CompanyProfile";
import CompanyJob from "./components/user/company/CompanyJob";
import EditRating from "./shared/components/EditRating";
import AddNewJob from "./shared/components/AddNewJob";
import EditJob from "./shared/components/EditJob";

function App() {
  const { user } = useSelector((state) => state.auth);
  const token = authStorageService().getToken();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token && !user?.userDetails && user?.sub) {
      dispatch(getUser(user.sub));
    }
  }, [user, dispatch, token]);
  useEffect(() => {
    if (user?.userDetails?.id && user?.userDetails?.role === "MEMBER") {
      dispatch(getMemberInfo(user?.userDetails?.id));
    } else if (user?.userDetails?.id && user?.userDetails?.role === "COMPANY") {
      dispatch(getCompanyInfo(user?.userDetails?.id));
    }
  }, [user]);

  return (
    <Switch>
      <Route path="/company/:id">
        <Layout>
          <Company />
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
      <Route path="/rating/:id">
        <Layout>
          <Rating />
        </Layout>
      </Route>
      <Route path="/add-job/:id">
        <Layout>
          <AddNewJob />
        </Layout>
      </Route>
      <Route path="/edit-job/:id">
        <Layout>
          <EditJob />
        </Layout>
      </Route>
      <Route path="/edit/rating/:id">
        <Layout>
          <EditRating />
        </Layout>
      </Route>
      <Route path="/account">
        <Layout>
          {user?.userDetails?.role === "MEMBER" && (
            <EditMember>
              <MemberProfile />
            </EditMember>
          )}

          {user?.userDetails?.role === "COMPANY" && (
            <EditCompany>
              <CompanyProfile></CompanyProfile>
            </EditCompany>
          )}
        </Layout>
      </Route>

      <Route path="/company-profile">
        <Layout>
          <EditCompany>
            <CompanyProfile />
          </EditCompany>
        </Layout>
      </Route>

      <Route path="/company-jobs">
        <Layout>
          <EditCompany>
            <CompanyJob />
          </EditCompany>
        </Layout>
      </Route>

      <Route path="/member-profile">
        <Layout>
          <EditMember>
            <MemberProfile />
          </EditMember>
        </Layout>
      </Route>
      <Route path="/member-ratings">
        <Layout>
          <EditMember>
            <MemberRatings />
          </EditMember>
        </Layout>
      </Route>
      <Route path="/member-saved">
        <Layout>
          <EditMember>
            <MemberSaved />
          </EditMember>
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
