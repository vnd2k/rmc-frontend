import React, { useEffect } from "react";
import classes from "./ContentRating.module.css";
import { postReport } from "../../stores/member/memberSlice";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
function ContentRating({ ratingId, close }) {
  const { isSuccess } = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handle = (data) => {
    console.log(ratingId);
    if (ratingId) {
      dispatch(postReport({ ratingId, data }));
    }
  };

  useEffect(() => {
    if (isSuccess === "postReport") {
      close();
    }
  }, [isSuccess, dispatch]);

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(handle)} className={classes.modal}>
        <a className={classes.close} onClick={close}>
          &times;
        </a>
        <div className={classes.header}> Enter reason to report</div>
        <textarea
          rows={4}
          className={classes.content}
          {...register("reason", {
            required: "Reason is required",
          })}
        ></textarea>
        <p className={classes.errorMsg}>
          {errors?.reason && errors.reason.message}
        </p>
        <div className={classes.btnWrapper}>
          <button type="submit" className={classes.btnAdd}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContentRating;
