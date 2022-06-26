import classes from "./ManageHome.module.css";
import { Link } from "react-router-dom";
function ManageHome(props) {
  return (
    <div className={classes.container}>
      <div className={classes.tabNavigation}>
        <div>
          <nav>
            <ul className={classes.tabWrapper}>
              <li className={classes.tabItem}>
                <Link to="/manage-company" className={classes.item}>
                  Company
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/manage-member" className={classes.item}>
                  Member
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/manage-report" className={classes.item}>
                  Report
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/manage-member" className={classes.item}>
                  Rating
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/manage-member" className={classes.item}>
                  Job
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

export default ManageHome;
