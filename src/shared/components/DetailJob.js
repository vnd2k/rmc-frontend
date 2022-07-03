import React, { useEffect } from "react";
import classes from "./DetailJob.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  getJob,
  putJob,
  deleteJob,
  reset,
} from "../../stores/company/companySlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCancel } from "react-icons/md";

function DetailJob() {
  const { isSuccess, job } = useSelector((state) => state.company);
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handle = (data) => {
    dispatch(putJob({ data, id }));
  };

  useEffect(() => {
    if (isSuccess === "editJobSuccess") {
      toast.success("Edit successfully");
      history.push(`/manage-job`);
      dispatch(reset());
    }
  }, [isSuccess, dispatch, history]);
  useEffect(() => {
    if (id) {
      dispatch(getJob(id));
    }
  }, [id, dispatch]);

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteJob(id));
    }
  };

  useEffect(() => {
    if (isSuccess === "deleteJobSuccess") {
      toast.success("Delete successfully");
      history.push(`/manage-job`);
      dispatch(reset());
    }
  }, [isSuccess, dispatch, history]);
  return (
    <div>
      {id === job?.id && (
        <div className={classes.formWrapper}>
          <div className={classes.formCard}>
            <form
              onSubmit={handleSubmit(handle)}
              className={classes.formContent}
            >
              <MdCancel
                onClick={() => handleDelete(job?.id)}
                className={classes.deleteBtn}
              ></MdCancel>
              <div>
                <div className={classes.locationWrapper}>
                  <div className={classes.titleName}>
                    <p>Job ID:</p>
                  </div>
                  <div className={classes.location}>{job?.id}</div>
                </div>
                <div className={classes.locationWrapper}>
                  <div className={classes.titleName}>
                    <p>Company ID:</p>
                  </div>
                  <div className={classes.location}>{job?.companyId}</div>
                </div>
                <p className={classes.titleRate}>
                  Title
                  <span className={classes.spanItem}>*</span>
                </p>
                <input
                  className={classes.areaInput}
                  defaultValue={job?.title}
                  placeholder="Title of job"
                  {...register("title", {
                    required: "Title is required",
                    maxLength: 500,
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors?.title && errors.title.message}
                </p>
              </div>

              <div className={classes.unlikeThings}>
                <p className={classes.titleRate}>
                  Description
                  <span className={classes.spanItem}>*</span>
                </p>
                <textarea
                  rows={10}
                  className={classes.areaInput}
                  defaultValue={job?.description}
                  placeholder="Description of job"
                  {...register("description", {
                    required: "Description is required",
                    maxLength: 500,
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
          </div>

          <div className={classes.roleWrapper}>
            <div className={classes.roleContent}>
              <div className={classes.titleRole}>
                <h3>List CV</h3>
              </div>
              <ul className={classes.ratingUl}>
                {/* {reportList?.map((item) => (
                <li className={classes.itemSearch} key={item.id}>
                  <div className={classes.ratingBody}>
                    <div className={classes.ratingTextWrapper}>
                      <div className={classes.logoWrapper}>
                        {item?.reporterAvatar ? (
                          <img
                            className={classes.logo}
                            src={item?.reporterAvatar}
                            alt="avatar"
                          ></img>
                        ) : (
                          <img
                            className={classes.logo}
                            src="/avatarReport.jpg"
                            alt="avatar"
                          ></img>
                        )}
                      </div>
                    </div>

                    <div className={classes.ratingCommentWrapper}>
                      <div className={classes.commentTitle}>
                        <div className={classes.nameWrapper}>
                          <div className={classes.itemLink}>{item.reason}</div>
                        </div>
                      </div>
                      <div className={classes.commentDescription}>
                        <div className={classes.locationWrapper}>
                          <h4>ReportId:</h4>
                          <div className={classes.location}>
                            {item.reportId}
                          </div>
                        </div>

                        <div className={classes.infoWrapper}>
                          <div className={classes.locationWrapper}>
                            <h4>Reporter:</h4>
                            <div className={classes.location}>
                              {item.reporter}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))} */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailJob;
