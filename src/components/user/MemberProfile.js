import classes from "./MemberProfile.module.css";

function MemberProfile(props) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>Profile</h1>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.editAvatar}>
          <label htmlFor="avatar">
            <img
              className={classes.avatar}
              src="/avatar.jpg"
              alt="avatar"
            ></img>
          </label>
          <input
            className={classes.pickAvatar}
            type={"file"}
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          ></input>
        </div>
        <div className={classes.pickNickname}>
          <label htmlFor="nickname">
            <p className={classes.nicknameLabel}>Nickname</p>
          </label>
          <input
            className={classes.nicknameInput}
            type={"text"}
            id="nickname"
            name="nickname"
            placeholder="Display name in RMC"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default MemberProfile;
