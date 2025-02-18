import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login, reset } from "../../stores/auth/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function LoginForm(props) {
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const handle = (data) => {
    dispatch(login(data));
  };

  const history = useHistory();
  useEffect(() => {
    if (isError) {
    }

    if (isSuccess || user) {
      history.push("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, history, dispatch]);

  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <div className={classes.card}>
          <Link to={"/"}>
            <Logo className={classes.logo} />
          </Link>

          <div className={classes.heading}></div>

          <form onSubmit={handleSubmit(handle)}>
            <div className={classes.formGroup}>
              <label htmlFor="email" className={classes.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={classes.formControl}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is invalid",
                  },
                })}
              />
              <p className={classes.errorMsg}>
                {errors?.email && errors.email.message}
              </p>
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="password" className={classes.formLabel}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={classes.formControl}
                name="password"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <p className={classes.errorMsg}>
                {errors?.password && errors.password.message}
              </p>
            </div>

            <div className={classes.formGroup}>
              <button
                disabled={isLoading}
                type="submit"
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
