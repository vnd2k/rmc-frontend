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
import ManageHome from "./components/user/admin/ManageHome";
import ManageCompany from "./components/user/admin/ManageCompany";
import UpdateCompany from "./shared/components/UpdateCompany";
import AddUser from "./shared/components/AddUser";
import ManageReport from "./components/user/admin/ManageReport";
import JobDetail from "./components/Job/JobDetail";
import ManageMember from "./components/user/admin/ManageMember";
import ManageRating from "./components/user/admin/ManageRating";
import DetailRating from "./shared/components/DetailRating";
import ManageJob from "./components/user/admin/ManageJob";
import DetailJob from "./shared/components/DetailJob";
import DetailReport from "./shared/components/DetailReport";

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
  }, [dispatch, user]);
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
          {/* <EditCompany> */}
          <AddNewJob />
          {/* </EditCompany> */}
        </Layout>
      </Route>
      <Route path="/edit-job/:id">
        <Layout>
          <EditJob />
        </Layout>
      </Route>
      <Route path="/detail-job/:id">
        <Layout>
          <JobDetail />
        </Layout>
      </Route>
      <Route path="/edit/rating/:id">
        <Layout>
          <EditRating />
        </Layout>
      </Route>
      <Route path="/edit-company/:id">
        <Layout>
          <ManageHome>
            <UpdateCompany />
          </ManageHome>
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

          {user?.userDetails?.role === "ADMIN" && (
            <ManageHome>
              <ManageCompany></ManageCompany>
            </ManageHome>
          )}
        </Layout>
      </Route>

      <Route path="/manage-company">
        <Layout>
          <ManageHome>
            <ManageCompany />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/manage-report">
        <Layout>
          <ManageHome>
            <ManageReport />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/manage-member">
        <Layout>
          <ManageHome>
            <ManageMember />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/manage-rating">
        <Layout>
          <ManageHome>
            <ManageRating />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/manage-job">
        <Layout>
          <ManageHome>
            <ManageJob />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/detail-report/:id">
        <Layout>
          <ManageHome>
            <DetailReport />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/detail-rating/:id">
        <Layout>
          <ManageHome>
            <DetailRating />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/manage-detail-job/:id">
        <Layout>
          <ManageHome>
            <DetailJob />
          </ManageHome>
        </Layout>
      </Route>
      <Route path="/add-user">
        <Layout>
          <ManageHome>
            <AddUser />
          </ManageHome>
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
