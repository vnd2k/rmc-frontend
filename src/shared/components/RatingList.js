import React, { useEffect } from "react";
import classes from "./RatingList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getRatingList,
  getRatingListMember,
} from "../../stores/rating/ratingSlice";
import RatingItem from "./RatingItem";

function RatingList(props) {
  const dispatch = useDispatch();
  const { ratingList, isSuccess } = useSelector((state) => state.rating);
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  useEffect(() => {
    if (props?.companyId) {
      const companyId = props?.companyId;
      const memberId = user?.id;
      dispatch(getRatingList({ companyId, memberId }));
    } else if (props?.memberId) {
      dispatch(getRatingListMember(props.memberId));
    }
  }, [props.companyId, props.memberId, isSuccess, dispatch, user]);
  console.log(ratingList);
  return (
    <div className={classes.containerComment}>
      {ratingList &&
        (ratingList.length > 0 ? (
          <>
            <div className={classes.ratingLiWrapper}>
              <ul className={classes.ratingUl}>
                {ratingList?.map((item) => (
                  <RatingItem item={item}></RatingItem>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p></p>
        ))}
    </div>
  );
}

export default RatingList;
