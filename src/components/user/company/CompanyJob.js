import classes from "./CompanyJob.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getListJob } from "../../../stores/company/companySlice";
import { CgArrowRightO } from "react-icons/cg";
import Spinner from "../../../shared/components/Spinner";

function CompanyJob(props) {
  const dispatch = useDispatch();
  const { jobList, company, isLoading } = useSelector((state) => state.company);
  useEffect(() => {
    dispatch(getListJob());
  }, [dispatch]);

  const companyLink = (id) => {
    return `/add-job/${id}`;
  };

  const jobLink = (jobId) => {
    return `/edit-job/${jobId}`;
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>Your hiring jobs</h1>
      </div>
      <div className={classes.ratingList}>
        <div className={classes.containerComment}>
          <Link className={classes.btnAdd} to={companyLink(company?.id)}>
            Add new job
          </Link>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {jobList &&
                (jobList.length > 0 ? (
                  <>
                    <div className={classes.ratingLiWrapper}>
                      <ul className={classes.ratingUl}>
                        {jobList?.map((item) => (
                          <li className={classes.itemSearch} key={item.id}>
                            <div className={classes.ratingBody}>
                              <div className={classes.ratingTextWrapper}>
                                <div className={classes.logoWrapper}>
                                  <img
                                    className={classes.logo}
                                    src={item?.logo}
                                    alt="logo"
                                  ></img>
                                </div>
                              </div>

                              <div className={classes.ratingCommentWrapper}>
                                <div className={classes.commentTitle}>
                                  <div className={classes.nameWrapper}>
                                    <div className={classes.nameWrapper}>
                                      <h4>{item.title}</h4>
                                    </div>
                                  </div>
                                  <Link
                                    to={jobLink(item.id)}
                                    className={classes.linkJob}
                                  >
                                    <CgArrowRightO></CgArrowRightO>
                                  </Link>
                                </div>
                                <div className={classes.commentDescription}>
                                  <div className={classes.jobDescription}>
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
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

export default CompanyJob;
