import React, { useState, useEffect } from "react";
import classes from "./RatingItem.module.css";
import { BiFlag, BiDislike, BiLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  likeRating,
  unlikeRating,
  deleteRating,
} from "../../stores/rating/ratingSlice";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import ContentRating from "./ContentRating";

function RatingItem(props) {
  const { isSuccess } = useSelector((state) => state.rating);
  const { item } = props;
  const dispatch = useDispatch();
  const { member } = useSelector((state) => state.member);
  const [liked, setLiked] = useState(item.liked);
  const [unliked, setUnliked] = useState(item.unliked);
  const [option, setOption] = useState(false);

  useEffect(() => {
    setLiked(item.liked);
    setUnliked(item.unliked);
  }, [isSuccess, dispatch, item.liked, item.unliked]);

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

  const handleLike = (id) => {
    if (id && member?.id && unliked === false) {
      const memberId = member.id;
      const ratingId = id;
      dispatch(likeRating({ memberId, ratingId }));
    }
  };

  const handleUnLike = (id) => {
    if (id && member?.id && liked === false) {
      const memberId = member.id;
      const ratingId = id;
      dispatch(unlikeRating({ memberId, ratingId }));
    }
  };

  const handleClickOption = () => {
    if (option) {
      setOption(false);
    } else {
      setOption(true);
    }
  };

  const handleEdit = (id) => {
    return `/edit/rating/${id}`;
  };

  const companyLink = (id) => {
    return `/company/${id}`;
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteRating(id));
      setOption(false);
    }
  };
  return (
    <li className={classes.itemSearch} key={item.id}>
      <div className={classes.ratingBody}>
        <div className={classes.ratingTextWrapper}>
          <div className={classes.ratingTitle}>QUALITY</div>
          <div className={checkPoint(item.ratingPoint)}>{item.ratingPoint}</div>
        </div>

        <div className={classes.ratingCommentWrapper}>
          {item.myRating ? (
            <div className={classes.option}>
              <BsThreeDots
                onClick={() => handleClickOption()}
                className={classes.optionButton}
              ></BsThreeDots>
              {option ? (
                <ul className={classes.optionWrapper}>
                  <li className={classes.editButton}>
                    <Link to={handleEdit(item.id)} className={classes.textLink}>
                      <FiEdit></FiEdit> Edit
                    </Link>
                  </li>
                  <li
                    className={classes.deleteButton}
                    onClick={() => handleDelete(item.id)}
                  >
                    <FiTrash2></FiTrash2> Detete
                  </li>
                </ul>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <></>
          )}
          <div className={classes.commentTitle}>
            <div className={classes.nameWrapper}>
              {item.companyName ? (
                <div className={classes.nameWrapper}>
                  <p className={classes.commentName}>
                    You have rated at{" "}
                    <Link
                      to={companyLink(item.companyId)}
                      className={classes.companyLink}
                    >
                      {item.companyName}
                    </Link>
                  </p>
                </div>
              ) : (
                <div className={classes.nameWrapper}>
                  <p className={classes.commentName}>{item.raterName}</p>
                </div>
              )}
            </div>
            <div className={classes.dateRating}>{item.createdAt}</div>
          </div>
          <div className={classes.commentDescription}>
            <p className={classes.comment}>
              <h4>What i liked</h4>
              {item.positivePoint}
              <h4>Suggestions for improvement</h4>
              {item.pointToImprove}
            </p>
          </div>
          <div className={classes.ratingFooter}>
            <div className={classes.voteRatingWrapper}>
              <div>
                <BiLike
                  onClick={() => handleLike(item.id)}
                  className={liked ? classes.likedButton : classes.likeButton}
                />

                {item.likeCount}
              </div>
              <div>
                <BiDislike
                  onClick={() => handleUnLike(item.id)}
                  className={
                    unliked ? classes.disLikedButton : classes.disLikeButton
                  }
                />
                {item.dislikeCount}
              </div>
            </div>
            {!item?.myRating && !item?.reported ? (
              <div className={classes.report}>
                <Popup
                  modal
                  trigger={
                    <div>
                      <BiFlag className={classes.reportIcon} />
                      <span className={classes.reportText}>
                        Report this rating
                      </span>
                    </div>
                  }
                >
                  {(close) => (
                    <ContentRating ratingId={item.id} close={close} />
                  )}
                </Popup>
              </div>
            ) : !item?.myRating && item?.reported ? (
              <div className={classes.reported}>
                <BiFlag className={classes.reportedIcon} />{" "}
                <span className={classes.reportText}>Reported</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default RatingItem;
