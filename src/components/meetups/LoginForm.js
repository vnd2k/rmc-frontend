import { useRef } from "react";
import classes from "./LoginForm.module.css";

function LoginForm(props) {
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
              <label for="username" className={classes.formLabel}>
                Email
              </label>
              <input
                type="text"
                className={classes.formControl}
                name="username"
                id="username"
              />
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
              <span className={classes.inputValidationError}></span>
            </div>
            <div className={classes.formGroup}>
              <button
                type="button"
                className={`${classes.btn} ${classes.btnPrimary} ${classes.signInBtn} `}
              >
                Login
              </button>
            </div>
          </form>

          <div className={classes.linkContainer}>
            <div className={classes.link}>
              <div>
                Don't have an account?{" "}
                <a className={classes.link} href="/signup">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
