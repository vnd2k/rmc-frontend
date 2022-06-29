import React, { useState, useEffect } from "react";
import classes from "./EditRating.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BsFillStarFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getRating, editRating } from "../../stores/rating/ratingSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditRating() {
  const { member } = useSelector((state) => state.member);
  const { isSuccess, rating } = useSelector((state) => state.rating);
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
      dispatch(editRating({ data, ratingPoint, id }));
    }
  };

  useEffect(() => {
    if (isSuccess === "editRatingSuccess") {
      toast.success("Edit successfully");
      history.push(`/company/${rating?.companyId}`);
    }
  }, [isSuccess, dispatch, history, rating?.companyId]);

  useEffect(() => {
    if (id) {
      dispatch(getRating(id));
    }
  }, [id, dispatch]);
  const onStarChange = (event) => {
    setStar(event.target.value);
  };
  return (
    <div>
      <div className={classes.headerWrapper}>
        <p className={classes.title}>
          Company:{" "}
          <span className={classes.companyName}>{rating?.companyName}</span>
        </p>
        <p className={classes.title}>
          Id rating: <span className={classes.location}>{rating?.id}</span>
        </p>
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
      </div>
    </div>
  );
}

export default EditRating;
