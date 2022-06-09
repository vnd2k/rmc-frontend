import classes from "./EditMember.module.css";
import { Link } from "react-router-dom";

function EditUser(props) {
  return (
    <div className={classes.container}>
      <div className={classes.tabNavigation}>
        <div className={classes.infoWrapper}>
          <div>
            <img
              className={classes.avatar}
              src="/avatar.jpg"
              alt="avatar"
            ></img>
          </div>
          <div className={classes.nameWrapper}>
            <h4 className={classes.nameText}>Văn Ngọc Đạt</h4>
          </div>
        </div>
        <div>
          <nav>
            <ul className={classes.tabWrapper}>
              <li className={classes.tabItem}>
                <Link to="/profile" className={classes.item}>
                  Profile
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/ratings" className={classes.item}>
                  Ratings
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/saved" className={classes.item}>
                  Saved Companies
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

export default EditUser;
