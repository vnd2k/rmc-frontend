import React, { useEffect } from "react";
import classes from "./ContentRating.module.css";
import { postReport } from "../../stores/member/memberSlice";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContentRating({ ratingId, close }) {
  const { isSuccess, isLoading, message } = useSelector(
    (state) => state.member
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handle = (data) => {
    if (ratingId) {
      dispatch(postReport({ ratingId, data }));
    }
  };

  useEffect(() => {
    if (message) {
      toast.error(message);
      close();
    }
  });

  useEffect(() => {
    if (isSuccess === "postReport") {
      toast.success("Report successfully");
      close();
    }
  }, [isSuccess, dispatch, close]);

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(handle)} className={classes.modal}>
        <button className={classes.close} onClick={close}>
          &times;
        </button>
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
          <button disabled={isLoading} type="submit" className={classes.btnAdd}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContentRating;
