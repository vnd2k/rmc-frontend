import classes from "./EditCompany.module.css";
import { Link } from "react-router-dom";
function EditCompany(props) {
  return (
    <div className={classes.container}>
      <div className={classes.tabNavigation}>
        <div>
          <nav>
            <ul className={classes.tabWrapper}>
              <li className={classes.tabItem}>
                <Link to="/company-profile" className={classes.item}>
                  Profile
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/company-jobs" className={classes.item}>
                  Jobs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default EditCompany;
