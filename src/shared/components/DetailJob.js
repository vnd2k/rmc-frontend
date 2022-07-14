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
  getListCvByJobId,
  reset,
} from "../../stores/company/companySlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCancel } from "react-icons/md";
import { BsFileEarmarkPerson } from "react-icons/bs";

function DetailJob() {
  const { isSuccess, job, cvList } = useSelector((state) => state.company);
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

  useEffect(() => {
    if (id) {
      dispatch(getListCvByJobId(id));
    }
  }, [id, dispatch]);
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

          {cvList && cvList.length > 0 ? (
            <div className={classes.roleWrapper}>
              <div className={classes.roleContent}>
                <div className={classes.titleRole}>
                  <h3>List CV</h3>
                </div>
                <ul className={classes.ratingUl}>
                  {cvList?.map((item) => (
                    <a
                      href={item.cvUrl}
                      target={"_blank"}
                      rel={"noreferrer"}
                      className={classes.ratingItem}
                    >
                      <li className={classes.itemSearch} key={item.id}>
                        <div className={classes.ratingBody}>
                          <div className={classes.itemLink}>
                            <BsFileEarmarkPerson
                              className={classes.cvIcon}
                            ></BsFileEarmarkPerson>
                            {item.email}
                          </div>
                        </div>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default DetailJob;
