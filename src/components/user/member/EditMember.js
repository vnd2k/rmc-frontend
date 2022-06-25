import classes from "./EditMember.module.css";
import { useState } from "react";
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
              <li className={classes.tabItem}>
                <Link to="/member-profile" className={classes.item}>
                  Profile
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/member-ratings" className={classes.item}>
                  Ratings
                </Link>
              </li>
              <li className={classes.tabItem}>
                <Link to="/member-saved" className={classes.item}>
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

export default EditMember;
