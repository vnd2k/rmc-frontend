import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";

function LoginForm(props) {
  function submitHandler(event) {}

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
                <Link to="/signup" className={classes.link}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
