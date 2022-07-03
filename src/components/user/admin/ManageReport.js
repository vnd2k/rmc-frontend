import classes from "./ManageReport.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListReport, deleteReport } from "../../../stores/admin/adminSlice";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../../../shared/components/Spinner";

function ManageReport(props) {
  const dispatch = useDispatch();
  const { reportList, isSuccess, isLoading } = useSelector(
    (state) => state.admin
  );
  useEffect(() => {
    dispatch(getListReport());
  }, [dispatch, isSuccess]);
  const handleDelete = (reportId) => {
    if (reportId) {
      dispatch(deleteReport(reportId));
    }
  };
  const reportLink = (reportId) => {
    return `/detail-report/${reportId}`;
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>List report</h1>
      </div>
      <div className={classes.ratingList}>
        <div className={classes.containerComment}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {reportList &&
                (reportList.length > 0 ? (
                  <>
                    <div className={classes.ratingLiWrapper}>
                      <ul className={classes.ratingUl}>
                        {reportList?.map((item) => (
                          <Link
                            to={reportLink(item.reportId)}
                            className={classes.ratingItem}
                          >
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
                                      <div className={classes.itemLink}>
                                        {item.reason}
                                      </div>
                                    </div>
                                    <MdCancel
                                      onClick={() =>
                                        handleDelete(item.reportId)
                                      }
                                      className={classes.deleteBtn}
                                    ></MdCancel>
                                  </div>
                                  <div className={classes.commentDescription}>
                                    <div className={classes.locationWrapper}>
                                      <h4>ReportId:</h4>
                                      <div className={classes.location}>
                                        {item.reportId}
                                      </div>
                                    </div>

                                    <div className={classes.locationWrapper}>
                                      <h4>RatingId:</h4>
                                      <div className={classes.location}>
                                        {item.ratingId}
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
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <p></p>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageReport;
