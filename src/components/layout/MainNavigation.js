import { Link, useLocation, useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../stores/auth/authSlice";

function MainNavigation() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    history.push("/");
  };

  return (
    <header className={classes.header}>
      <div>
        <Link to={"/"}>
          <Logo className={classes.logo} />
        </Link>
      </div>
      {!(location.pathname === "/") && !(location.pathname === "/rating") && (
        <input
          type="text"
          placeholder="Company Name"
          className={classes.searchBox}
        ></input>
      )}

      <nav>
        {user ? (
          <ul>
            <li className={classes.buttonWrapper}>
              <Link to={"/account"}>
                <button className={classes.button1}>Profile</button>
              </Link>
            </li>
            <li className={classes.buttonWrapper}>
              <button className={classes.button} onClick={handleLogout}>
                Log out
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li className={classes.buttonWrapper}>
              <Link to={"/login"}>
                <button className={classes.button1}>Login</button>
              </Link>
            </li>
            <li className={classes.buttonWrapper}>
              <Link to={"/signup"}>
                <button className={classes.button}>Sign Up</button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
