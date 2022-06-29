import classes from "./EditCompany.module.css";
import { Link } from "react-router-dom";

function EditCompany(props) {
  return (
    <div className={classes.container}>
      <div className={classes.tabNavigation}>
        <div>
          <nav>
            <ul className={classes.tabWrapper}>
              <Link to="/company-profile" className={classes.item}>
                <li className={classes.tabItem}>Profile</li>
              </Link>
              <Link to="/company-jobs" className={classes.item}>
                <li className={classes.tabItem}>Jobs</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default EditCompany;
