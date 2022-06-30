import React, { useEffect } from "react";
import classes from "./JobDetail.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import {
  getJob,
  getListJobById,
  getCompanyInfo,
} from "../../stores/company/companySlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function JobDetail() {
  const { company, job, jobList } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const { id = "" } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getJob(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (job?.companyId) {
      const companyId = job?.companyId;
      dispatch(getListJobById(companyId));
    }
  }, [dispatch, job?.companyId]);

  useEffect(() => {
    if (job?.companyId) {
      const companyId = job?.companyId;
      dispatch(getCompanyInfo(companyId));
    }
  }, [dispatch, job?.companyId]);

  const linkCompany = (id) => {
    return `/company/${id}`;
  };

  const jobLink = (jobId) => {
    return `/detail-job/${jobId}`;
  };

  return (
    <div>
      <div className={classes.headerWrapper}>
        <p className={classes.title}>
          <Link
            to={linkCompany(job?.companyId)}
            className={classes.companyName}
          >
            <span>{company?.name}: </span>
          </Link>
          {job?.title}
        </p>
        <div className={classes.locationWrapper}>
          <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
          <div className={classes.location}>{company?.address}</div>
        </div>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          {id === job?.id && (
            <div className={classes.formContent}>
              <div className={classes.unlikeThings}>
                <p className={classes.titleRate}>Job description</p>
                <p className={classes.jobDescription}>{job?.description}</p>
              </div>
              <div className={classes.btnWrapper}>
                <button className={classes.rateButton}>Apply CV</button>
              </div>
            </div>
          )}
        </div>
        {jobList &&
          (jobList.length > 1 ? (
            <div className={classes.roleWrapper}>
              <div className={classes.roleContent}>
                <div className={classes.titleRole}>
                  <h3>
                    Other jobs in <span>{company?.name}</span>
                  </h3>
                  {/* <ul className={classes.ratingUl}>
                    {jobList?.map((item) => (
                      <li className={classes.itemSearch} key={item.id}>
                        <div className={classes.ratingBody}>
                          <div className={classes.ratingCommentWrapper}>
                            <div className={classes.commentTitle}>
                              <div className={classes.nameWrapper}>
                                <h4>{item.title}</h4>
                              </div>{" "}
                              <Link
                                to={jobLink(item.id)}
                                className={classes.linkJob}
                              >
                                <CgArrowRightO></CgArrowRightO>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul> */}
                  <div className={classes.ratingLiWrapper}>
                    <ul className={classes.ratingUl}>
                      {jobList?.map((item) => (
                        <Link to={jobLink(item.id)} className={classes.linkJob}>
                          <li className={classes.itemSearch} key={item.id}>
                            <div className={classes.ratingBody}>
                              <div className={classes.ratingTextWrapper}>
                                <div className={classes.logoWrapper}>
                                  <img
                                    className={classes.logoJob}
                                    src={item?.logo}
                                    alt="logo"
                                  ></img>
                                </div>
                              </div>

                              <div className={classes.ratingCommentWrapper}>
                                <div className={classes.nameWrapper}>
                                  <h4>{item.title}</h4>
                                </div>
                              </div>
                            </div>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          ))}
      </div>
    </div>
  );
}

export default JobDetail;
