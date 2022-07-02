import classes from "./ManageRating.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListRating } from "../../../stores/admin/adminSlice";
import { Link } from "react-router-dom";

function ManageRating(props) {
  const dispatch = useDispatch();
  const { ratingList, isSuccess } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getListRating());
  }, [dispatch, isSuccess]);

  const ratingLink = (id) => {
    if (id) {
      return `/detail-rating/${id}`;
    }
  };

  const checkPoint = (point) => {
    switch (point) {
      case 1:
        return classes.badRatingValue;
      case 2:
        return classes.badRatingValue;
      case 3:
        return classes.okRatingValue;
      case 4:
        return classes.goodRatingValue;
      case 5:
        return classes.goodRatingValue;
      default:
        return classes.goodRatingValue;
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>List rating</h1>
      </div>
      <div className={classes.ratingList}>
        <div className={classes.containerComment}>
          {ratingList &&
            (ratingList.length > 0 ? (
              <>
                <div className={classes.ratingLiWrapper}>
                  <ul className={classes.ratingUl}>
                    {ratingList?.map((item) => (
                      <Link
                        to={ratingLink(item.id)}
                        className={classes.ratingItem}
                      >
                        <li className={classes.itemSearch} key={item.id}>
                          <div className={classes.ratingBody}>
                            <div className={classes.ratingTextWrapper}>
                              <div className={classes.ratingTitle}>QUALITY</div>
                              <div className={checkPoint(item.ratingPoint)}>
                                {item.ratingPoint}
                              </div>
                            </div>

                            <div className={classes.ratingCommentWrapper}>
                              <div className={classes.locationWrapper}>
                                <div className={classes.titleName}>
                                  <p>ID:</p>
                                </div>
                                <div className={classes.location}>
                                  {item.id}
                                </div>
                              </div>

                              <div className={classes.locationWrapper}>
                                <div className={classes.titleName}>
                                  <p>Rated by:</p>
                                </div>
                                <div className={classes.location}>
                                  {item.raterName}
                                </div>
                              </div>
                              <div className={classes.locationWrapper}>
                                <div className={classes.titleName}>
                                  <p>Rate in:</p>
                                </div>
                                <div className={classes.location}>
                                  {item.companyName}
                                </div>
                              </div>
                              <div className={classes.locationWrapper}>
                                <div className={classes.reportedCount}>
                                  <p>Reported count:</p>
                                </div>
                                <div className={classes.location}>
                                  {item.reportedCount}
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
        </div>
      </div>
    </div>
  );
}

export default ManageRating;
