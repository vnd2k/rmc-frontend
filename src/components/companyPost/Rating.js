import React, { useState, useEffect } from "react";
import classes from "./Rating.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillStarFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCompanyById, reset } from "../../stores/company/companySlice";
import { useForm } from "react-hook-form";
import { postRating } from "../../stores/rating/ratingSlice";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Rating() {
  const { member } = useSelector((state) => state.member);
  const { companyById } = useSelector((state) => state.company);
  const { isSuccess, isLoading } = useSelector((state) => state.rating);
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
    if (member) {
      const ratingPoint = star;
      const memberId = member?.id;
      dispatch(postRating({ data, memberId, ratingPoint, id }));
    }
  };

  useEffect(() => {
    if (isSuccess === "postSuccess") {
      toast.success("Rate successfully");
      reset();
      history.push(`/company/${id}`);
    }
  }, [isSuccess, dispatch, history, id]);

  useEffect(() => {
    if (id) {
      dispatch(getCompanyById(id));
    }
  }, [id, dispatch]);
  const onStarChange = (event) => {
    setStar(event.target.value);
  };
  return (
    <div>
      <div className={classes.headerWrapper}>
        <p className={classes.title}>
          Rate: <span className={classes.companyName}>{companyById?.name}</span>
        </p>
        <div className={classes.locationWrapper}>
          <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
          <div className={classes.location}>{companyById?.address}</div>
        </div>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          <form onSubmit={handleSubmit(handle)} className={classes.formContent}>
            <div>
              <p className={classes.titleRate}>
                What you like about the company?
                <span className={classes.spanItem}>*</span>
              </p>
              <textarea
                rows={4}
                className={classes.areaInput}
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
              <button disabled={isLoading} className={classes.rateButton}>
                Confirm Rating
              </button>
            </div>
          </form>
        </div>
        <div className={classes.roleWrapper}>
          <div className={classes.roleContent}>
            <div className={classes.titleRole}>
              <h3>RATING ROLE</h3>
            </div>
            <ul>
              <li>Không sử dụng từ ngữ mang ý xúc phạm, miệt thị</li>
              <li>Không cung cấp thông tin cá nhân</li>
              <li>
                Không cung cấp thông tin bảo mật, bí mật kinh doanh của công ty
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
