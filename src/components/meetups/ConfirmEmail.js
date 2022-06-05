import classes from "./LoginForm.module.css";
import { useHistory } from "react-router-dom";

function ConfirmEmail(props) {
  const history = useHistory();
  function handle() {
    history.push("/login");
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <div className={classes.card}>
          <div className={classes.logo}></div>

          <div className={classes.heading}>Verification link sent!</div>

          <div className={classes.confirm}>
            Please check your email to verify account.
          </div>

          <div className={classes.formGroup}>
            <button
              type="button"
              onClick={handle}
              className={`${classes.btn} ${classes.btnPrimary} ${classes.signInBtn} `}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;
