import React, { useEffect } from "react";
import classes from "./AddNewJob.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { postJob } from "../../stores/company/companySlice";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddNewJob() {
  const { company, isSuccess, isLoading } = useSelector(
    (state) => state.company
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handle = (data) => {
    if (company) {
      dispatch(postJob(data));
    }
  };

  useEffect(() => {
    if (isSuccess === "postJobSuccess") {
      toast.success("Adding job successfully");
      history.push(`/company-jobs`);
    }
  }, [isSuccess, dispatch, history]);

  return (
    <div>
      <div className={classes.headerWrapper}>
        <p className={classes.title}>
          Add new job for:{" "}
          <span className={classes.companyName}>{company?.name}</span>
        </p>
        <div className={classes.locationWrapper}>
          <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
          <div className={classes.location}>{company?.address}</div>
        </div>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          <form onSubmit={handleSubmit(handle)} className={classes.formContent}>
            <div>
              <p className={classes.titleRate}>
                Job title
                <span className={classes.spanItem}>*</span>
              </p>
              <input
                className={classes.areaInput}
                placeholder="Title of job"
                {...register("title", {
                  required: "Title is required",
                  maxLength: 100,
                })}
              ></input>
              <p className={classes.errorMsg}>
                {errors?.title && errors.title.message}
              </p>
            </div>

            <div className={classes.unlikeThings}>
              <p className={classes.titleRate}>
                Job description
                <span className={classes.spanItem}>*</span>
              </p>
              <textarea
                rows={10}
                className={classes.areaInput}
                placeholder="Description of job"
                {...register("description", {
                  required: "Description is required",
                  maxLength: 2000,
                })}
              ></textarea>
              <p className={classes.errorMsg}>
                {errors?.description && errors.description.message}
              </p>
            </div>
            <div className={classes.btnWrapper}>
              <button disabled={isLoading} className={classes.rateButton}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewJob;
