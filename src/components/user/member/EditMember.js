import classes from "./EditMember.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function EditMember(props) {
  const { member } = useSelector((state) => state.member);
  return (
    <div className={classes.container}>
      <div className={classes.tabNavigation}>
        <div className={classes.infoWrapper}>
          <div>
            {!member?.avatar && (
              <img src="/avatar.jpg" alt="avatar" className={classes.avatar} />
            )}
            {member?.avatar && (
              <img
                className={classes.avatar}
                src={member?.avatar}
                alt="avatar"
              />
            )}
          </div>
          <div className={classes.nameWrapper}>
            <h4 className={classes.nameText}>{member?.nickname}</h4>
          </div>
        </div>
        <div>
          <nav>
            <ul className={classes.tabWrapper}>
              <Link to="/member-profile" className={classes.item}>
                <li className={classes.tabItem}>Profile</li>
              </Link>
              <Link to="/member-ratings" className={classes.item}>
                <li className={classes.tabItem}>Ratings</li>
              </Link>
              <Link to="/member-saved" className={classes.item}>
                <li className={classes.tabItem}>Saved Companies</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default EditMember;
