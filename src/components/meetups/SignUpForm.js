import { useRef } from "react";

import classes from "./LoginForm.module.css";

function SignUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <div className={classes.card}>
          <div className={classes.logo}></div>

          <div className={classes.heading}></div>

          <form onSubmit={submitHandler}>
            <div className={classes.formGroup}>
              <label for="email" className={classes.formLabel}>
                Email
              </label>
              <input type="email" className={classes.formControl} />
            </div>

            <div className={classes.formGroup}>
              <label for="nickname" className={classes.formLabel}>
                Nickname
              </label>
              <input type="text" className={classes.formControl} />
            </div>

            <div className={classes.formGroup}>
              <label for="password" className={classes.formLabel}>
                Password
              </label>
              <input
                type="password"
                className={classes.formControl}
                name="password"
              />
            </div>

            <div className={classes.formGroup}>
              <label for="rePassword" className={classes.formLabel}>
                Confirm Password
              </label>
              <input
                type="rePassword"
                className={classes.formControl}
                name="rePassword"
              />
            </div>

            <div className={classes.formGroup}>
              <button
                type="button"
                className={`${classes.btn} ${classes.btnPrimary} ${classes.signInBtn} `}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
