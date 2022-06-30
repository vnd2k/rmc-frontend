import classes from "./ManageHome.module.css";
import { Link } from "react-router-dom";
function ManageHome(props) {
  return (
    <div className={classes.container}>
      <div className={classes.tabNavigation}>
        <div>
          <nav>
            <ul className={classes.tabWrapper}>
              <Link to="/manage-company" className={classes.item}>
                <li className={classes.tabItem}>Company</li>
              </Link>
              <Link to="/manage-member" className={classes.item}>
                <li className={classes.tabItem}>Member</li>
              </Link>
              <Link to="/manage-report" className={classes.item}>
                <li className={classes.tabItem}>Report</li>
              </Link>
              <Link to="/manage-rating" className={classes.item}>
                <li className={classes.tabItem}>Rating</li>
              </Link>
              <Link to="/manage-job" className={classes.item}>
                <li className={classes.tabItem}>Job</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default ManageHome;
