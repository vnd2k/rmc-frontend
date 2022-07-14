import React, { useEffect } from "react";
import classes from "./DetailReport.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getReportById,
  putReport,
  deleteReport,
  reset,
} from "../../stores/admin/adminSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useHistory } from "react-router-dom";

function DetailReport() {
  const { isSuccessAdmin, report, isLoading } = useSelector(
    (state) => state.admin
  );
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const handleDelete = () => {
    if (id) {
      dispatch(deleteReport(id));
    }
  };

  const handle = (data) => {
    if (report) {
      const reportId = report?.reportId;
      dispatch(putReport({ data, reportId }));
    }
  };
  useEffect(() => {
    if (id) {
      dispatch(getReportById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (isSuccessAdmin === "putReport") {
      toast.success("Edit successfully");
      history.push(`/manage-report`);
      dispatch(reset());
    }
  }, [isSuccessAdmin, dispatch, history]);

  useEffect(() => {
    if (isSuccessAdmin === "deleteReport") {
      toast.success("Delete successfully");
      history.push(`/manage-report`);
      dispatch(reset());
    }
  }, [isSuccessAdmin, dispatch, history]);

  const ratingLink = (id) => {
    if (id) {
      return `/detail-rating/${id}`;
    }
  };
  return (
    <div>
      {id === report?.reportId && (
        <div className={classes.formWrapper}>
          <div className={classes.formCard}>
            <form
              onSubmit={handleSubmit(handle)}
              className={classes.formContent}
            >
              <div>
                <div className={classes.locationWrapper}>
                  <div className={classes.titleName}>
                    <p>Report ID:</p>
                  </div>
                  <div className={classes.location}>{report?.reportId}</div>
                </div>
                <MdCancel
                  onClick={() => handleDelete()}
                  className={classes.deleteBtn}
                ></MdCancel>
                <Link
                  to={ratingLink(report?.ratingId)}
                  className={classes.ratingItem}
                >
                  <div className={classes.locationWrapper}>
                    <div className={classes.titleName}>
                      <p>Rating ID:</p>
                    </div>
                    <div className={classes.location}>{report?.ratingId}</div>
                  </div>
                </Link>

                <p className={classes.titleRate}>
                  Reason
                  <span className={classes.spanItem}>*</span>
                </p>
                <input
                  className={classes.areaInput}
                  defaultValue={report?.reason}
                  placeholder="Reason of report"
                  {...register("reason", {
                    required: "Reason is required",
                    maxLength: 500,
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors?.reason && errors.reason.message}
                </p>
              </div>

              <div className={classes.btnWrapper}>
                <button disabled={isLoading} className={classes.rateButton}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailReport;
