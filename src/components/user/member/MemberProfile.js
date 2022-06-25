import classes from "./MemberProfile.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateMemberInfo,
  updateMemberAvatar,
} from "../../../stores/member/memberSlice";
import { useForm } from "react-hook-form";

function MemberProfile(props) {
  const { user } = useSelector((state) => state.auth);
  const { member } = useSelector((state) => state.member);
  const [inputAvatar, setInputAvatar] = useState();
  const [previewAvatar, setPreviewAvatar] = useState("");
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const handle = (data) => {
    const memberId = user?.userDetails?.id;
    const nickname = data?.nickname;
    if (nickname !== "") {
      dispatch(updateMemberInfo({ memberId, nickname }));
    }
  };

  const handleInputAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    previewFile(file);
    setInputAvatar(e.target.value);
    handleSubmitAvatar(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewAvatar(reader.result);
    };
  };

  const handleSubmitAvatar = (file) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        const memberId = user?.userDetails?.id;
        const avatar = reader?.result;
        dispatch(updateMemberAvatar({ memberId, avatar }));
      }
    };
    reader.onerror = () => {};
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>Profile</h1>
      </div>
      <form onSubmit={handleSubmit(handle)}>
        <div className={classes.formWrapper}>
          <div className={classes.editAvatar}>
            <label htmlFor="avatar">
              {!member?.avatar && !previewAvatar && (
                <img
                  src="/avatar.jpg"
                  alt="avatar"
                  className={classes.avatar}
                />
              )}
              {member?.avatar && !previewAvatar && (
                <img
                  className={classes.avatar}
                  src={member?.avatar}
                  alt="avatar"
                />
              )}
              {previewAvatar && (
                <img
                  src={previewAvatar}
                  alt="avatar"
                  className={classes.avatar}
                />
              )}
            </label>
            <input
              className={classes.pickAvatar}
              type={"file"}
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              value={inputAvatar}
              onChange={handleInputAvatar}
            ></input>
          </div>

          <div className={classes.pickNickname}>
            <span>
              <label className={classes.nicknameLabel} htmlFor="nickname">
                Nickname
              </label>
              <p className={classes.nicknameDetail}>
                Your name as you'd like it to be displayed on RMC.
              </p>
            </span>
            <input
              className={classes.nicknameInput}
              type={"text"}
              defaultValue={member?.nickname}
              id="nickname"
              name="nickname"
              {...register("nickname")}
            ></input>
          </div>
        </div>
        <div className={classes.btnWrapper}>
          <button type="submit" className={classes.btnItem}>
            <span className={classes.btnWrapper}>Update Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemberProfile;
