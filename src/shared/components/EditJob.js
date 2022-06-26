import React, { useEffect } from "react";
import classes from "./EditJob.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  putJob,
  getJob,
  reset,
  deleteJob,
} from "../../stores/company/companySlice";
import { useParams } from "react-router-dom";
import { MdCancel } from "react-icons/md";

function EditJob() {
  const { company, job, isSuccess } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id = "" } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handle = (data) => {
    if (job) {
      const jobId = job?.id;
      dispatch(putJob({ data, jobId }));
    }
  };
  useEffect(() => {
    if (id) {
      dispatch(getJob(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (isSuccess === "updateJobSuccess" || isSuccess === "deleteJobSuccess") {
      reset();
      history.push(`/company-jobs`);
    }
  }, [isSuccess, dispatch, history]);
  const handleDelete = () => {
    if (id) {
      dispatch(deleteJob(id));
    }
  };
  return (
    <div>
      <div className={classes.headerWrapper}>
        <p className={classes.title}>
          Edit job at:{" "}
          <span className={classes.companyName}>{company?.name}</span>
        </p>
        <div className={classes.locationWrapper}>
          <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
          <div className={classes.location}>{company?.address}</div>
        </div>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          {id === job?.id && (
            <form
              onSubmit={handleSubmit(handle)}
              className={classes.formContent}
            >
              <div>
                <div className={classes.titleWrapper}>
                  <p className={classes.titleRate}>
                    Job title
                    <span className={classes.spanItem}>*</span>
                  </p>
                  <MdCancel
                    onClick={() => handleDelete()}
                    className={classes.deleteBtn}
                  ></MdCancel>
                </div>
                <input
                  defaultValue={job?.title}
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
                  defaultValue={job?.description}
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
                <button className={classes.rateButton}>Update</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditJob;
