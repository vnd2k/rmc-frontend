import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./AddUser.module.css";
import { signUp, reset } from "../../stores/auth/authSlice";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function AddUser(props) {
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const dispatch = useDispatch();
  const handle = (data) => {
    dispatch(signUp(data));
  };

  const history = useHistory();
  useEffect(() => {
    if (isError) {
      // toast.error(message);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, history, dispatch]);

  return (
    <div className={classes.formWrapper}>
      <div className={classes.formCard}>
        <form className={classes.formContent} onSubmit={handleSubmit(handle)}>
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
            <label htmlFor="radio" className={classes.formLabel}>
              Take a role
            </label>
            <input
              {...register("role")}
              type="radio"
              defaultChecked
              name="role"
              value="MEMBER"
              id="field-member"
              className={classes.buttonRadio}
            />
            <label htmlFor="field-member" className={classes.formLabelRadio}>
              Member
            </label>
            <input
              {...register("role")}
              type="radio"
              name="role"
              value="COMPANY"
              id="field-company"
              className={classes.buttonRadio}
            />
            <label htmlFor="field-company" className={classes.formLabelRadio}>
              Company
            </label>
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
            <label htmlFor="rePassword" className={classes.formLabel}>
              Confirm Password
            </label>
            <input
              type="password"
              id="rePassword"
              className={classes.formControl}
              name="rePassword"
              {...register("rePassword", {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            <p className={classes.errorMsg}>
              {errors?.rePassword && errors.rePassword.message}
            </p>
          </div>

          <div className={classes.formGroup}>
            <button
              type="submit"
              className={`${classes.btn} ${classes.btnPrimary} ${classes.signInBtn} `}
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
