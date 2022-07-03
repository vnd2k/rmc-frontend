import React, { useState, useEffect } from "react";
import classes from "./DetailRating.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BsFillStarFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getRating, editRating, reset } from "../../stores/rating/ratingSlice";
import { getReportByRating, deleteRating } from "../../stores/admin/adminSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
function DetailRating() {
  const { isSuccess, rating } = useSelector((state) => state.rating);
  const { isSuccessAdmin, reportList } = useSelector((state) => state.admin);
  const [star, setStar] = useState(5);
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handle = (data) => {
    const ratingPoint = star;
    dispatch(editRating({ data, ratingPoint, id }));
  };

  useEffect(() => {
    if (isSuccess === "editRatingSuccess") {
      toast.success("Edit successfully");
      history.push(`/manage-rating`);
      dispatch(reset());
    }
  }, [isSuccess, dispatch, history]);
  useEffect(() => {
    if (id) {
      dispatch(getRating(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(getReportByRating(id));
    }
  }, [id, dispatch]);

  const onStarChange = (event) => {
    setStar(event.target.value);
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteRating(id));
    }
  };
  useEffect(() => {
    if (isSuccessAdmin === "deleteRating") {
      toast.success("Delete successfully");
      history.push(`/manage-rating`);
      dispatch(reset());
    }
  }, [isSuccessAdmin, dispatch, history]);
  const reportLink = (reportId) => {
    return `/detail-report/${reportId}`;
  };
  return (
    <div>
      {id === rating?.id && (
        <div className={classes.formWrapper}>
          <div className={classes.formCard}>
            <form
              onSubmit={handleSubmit(handle)}
              className={classes.formContent}
            >
              <MdCancel
                onClick={() => handleDelete(rating?.id)}
                className={classes.deleteBtn}
              ></MdCancel>
              <div>
                <div className={classes.locationWrapper}>
                  <div className={classes.titleName}>
                    <p>ID:</p>
                  </div>
                  <div className={classes.location}>{rating?.id}</div>
                </div>
                <div className={classes.locationWrapper}>
                  <div className={classes.titleName}>
                    <p>Rated by:</p>
                  </div>
                  <div className={classes.location}>{rating?.raterName}</div>
                </div>
                <div className={classes.locationWrapper}>
                  <div className={classes.titleName}>
                    <p>Rate in:</p>
                  </div>
                  <div className={classes.location}>{rating?.companyName}</div>
                </div>
                <p className={classes.titleRate}>
                  What you like about the company?
                  <span className={classes.spanItem}>*</span>
                </p>
                <textarea
                  rows={4}
                  className={classes.areaInput}
                  defaultValue={rating?.positivePoint}
                  placeholder="What makes this company stand out? Example: 'Great office', 'Awesome company culture', 'Good remuneration'"
                  {...register("positivePoint", {
                    required: "PositivePoint is required",
                    maxLength: 500,
                  })}
                ></textarea>
                <p className={classes.errorMsg}>
                  {errors?.positivePoint && errors.positivePoint.message}
                </p>
              </div>

              <div className={classes.unlikeThings}>
                <p className={classes.titleRate}>
                  What the company needs to improve?
                  <span className={classes.spanItem}>*</span>
                </p>
                <textarea
                  rows={4}
                  className={classes.areaInput}
                  defaultValue={rating?.pointToImprove}
                  placeholder="What do you think the company needs to improve on? For example: 'When there is a project, the OT is a bit too much, putting pressure on the staff, so the estimation step needs to be improved. Meetings and reports take a lot of time, so these should be reduced.'"
                  {...register("pointsToImprove", {
                    required: "PointsToImprove is required",
                    maxLength: 500,
                  })}
                ></textarea>
                <p className={classes.errorMsg}>
                  {errors?.pointsToImprove && errors.pointsToImprove.message}
                </p>
              </div>

              <div className={classes.rateStar}>
                <p className={classes.titleRate}>
                  Rate your company<span className={classes.spanItem}>*</span>
                </p>
                <div className={classes.getRating}>
                  <div className={classes.ratingSlider}>
                    <div className={classes.ratingRange}>
                      <div>
                        <input
                          type={"radio"}
                          name={"star"}
                          id={"1"}
                          value={1}
                          onChange={onStarChange}
                          className={classes.inputWrapper}
                        />
                        <label htmlFor="1">
                          <BsFillStarFill
                            className={
                              1 <= star
                                ? classes.ratingStar
                                : classes.ratingStarFalse
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <input
                          type={"radio"}
                          name={"star"}
                          id={"2"}
                          value={2}
                          onChange={onStarChange}
                          className={classes.inputWrapper}
                        />
                        <label htmlFor="2">
                          <BsFillStarFill
                            className={
                              2 <= star
                                ? classes.ratingStar
                                : classes.ratingStarFalse
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <input
                          type={"radio"}
                          name={"star"}
                          id={"3"}
                          value={3}
                          onChange={onStarChange}
                          className={classes.inputWrapper}
                        />
                        <label htmlFor="3">
                          <BsFillStarFill
                            className={
                              3 <= star
                                ? classes.ratingStar
                                : classes.ratingStarFalse
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <input
                          type={"radio"}
                          name={"star"}
                          id={"4"}
                          value={4}
                          onChange={onStarChange}
                          className={classes.inputWrapper}
                        />
                        <label htmlFor="4">
                          <BsFillStarFill
                            className={
                              4 <= star
                                ? classes.ratingStar
                                : classes.ratingStarFalse
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <input
                          type={"radio"}
                          name={"star"}
                          id={"5"}
                          value={5}
                          onChange={onStarChange}
                          className={classes.inputWrapper}
                        />
                        <label htmlFor="5">
                          <BsFillStarFill
                            className={
                              5 <= star
                                ? classes.ratingStar
                                : classes.ratingStarFalse
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.btnWrapper}>
                <button className={classes.rateButton}>Confirm Rating</button>
              </div>
            </form>
          </div>
          {reportList && reportList.length > 0 ? (
            <div className={classes.roleWrapper}>
              <div className={classes.roleContent}>
                <div className={classes.titleRole}>
                  <h3>List reported</h3>
                </div>
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
                    </Link>
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

export default DetailRating;
