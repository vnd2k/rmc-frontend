import classes from "./ManageJob.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListJob } from "../../../stores/admin/adminSlice";
import { Link } from "react-router-dom";

function ManageJob(props) {
  const dispatch = useDispatch();
  const { jobList, isSuccess } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getListJob());
  }, [dispatch, isSuccess]);

  const jobLink = (id) => {
    return `/manage-detail-job/${id}`;
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>List job</h1>
      </div>
      <div className={classes.ratingList}>
        <div className={classes.containerComment}>
          {jobList &&
            (jobList.length > 0 ? (
              <>
                <div className={classes.ratingLiWrapper}>
                  <ul className={classes.ratingUl}>
                    {jobList &&
                      (jobList.length > 0 ? (
                        <>
                          <div className={classes.ratingLiWrapper}>
                            <ul className={classes.ratingUl}>
                              {jobList?.map((item) => (
                                <Link
                                  to={jobLink(item.id)}
                                  className={classes.ratingItem}
                                >
                                  <li
                                    className={classes.itemSearch}
                                    key={item.id}
                                  >
                                    <div className={classes.ratingBody}>
                                      <div
                                        className={classes.ratingTextWrapper}
                                      >
                                        <div className={classes.logoWrapper}>
                                          {item?.logo ? (
                                            <img
                                              className={classes.logo}
                                              src={item?.logo}
                                              alt="logo"
                                            ></img>
                                          ) : (
                                            <img
                                              className={classes.logo}
                                              src="/logo.png"
                                              alt="logo"
                                            ></img>
                                          )}
                                        </div>
                                      </div>

                                      <div
                                        className={classes.ratingCommentWrapper}
                                      >
                                        <div
                                          className={classes.locationWrapper}
                                        >
                                          <div
                                            className={classes.reportedCount}
                                          >
                                            <p>Title:</p>
                                          </div>
                                          <div className={classes.location}>
                                            {item.title}
                                          </div>
                                        </div>
                                        <div
                                          className={classes.locationWrapper}
                                        >
                                          <div className={classes.titleName}>
                                            <p>Job ID:</p>
                                          </div>
                                          <div className={classes.location}>
                                            {item.id}
                                          </div>
                                        </div>

                                        <div
                                          className={classes.locationWrapper}
                                        >
                                          <div className={classes.titleName}>
                                            <p>Company ID:</p>
                                          </div>
                                          <div className={classes.location}>
                                            {item.companyId}
                                          </div>
                                        </div>
                                        <div
                                          className={classes.locationWrapper}
                                        >
                                          <div className={classes.titleName}>
                                            <p>Job in:</p>
                                          </div>
                                          <div className={classes.location}>
                                            {item.companyName}
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
                  </ul>
                </div>
              </>
            ) : (
              <p></p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ManageJob;
