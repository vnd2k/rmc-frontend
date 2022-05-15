import { Link, useLocation } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function MainNavigation() {
  const location = useLocation();
  console.log(location);
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
        <ul>
          <li>
            <Link to={"/login"}>
              <button className={classes.button1}>Login</button>
            </Link>
          </li>
          <li>
            <Link to={"/signup"}>
              <button className={classes.button}>Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
