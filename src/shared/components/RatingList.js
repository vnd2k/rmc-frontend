import React, { useEffect } from "react";
import classes from "./RatingList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getRatingList,
  getRatingListMember,
} from "../../stores/rating/ratingSlice";
import RatingItem from "./RatingItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import Pagination from "./Pagination";

function RatingList(props) {
  const dispatch = useDispatch();
  const { ratingList, isSuccess, isLoading } = useSelector(
    (state) => state.rating
  );
  const { isSuccessMember } = useSelector((state) => state.member);
  useEffect(() => {
    if (props?.companyId) {
      const companyId = props?.companyId;
      const page = props?.page;
      const sortType = props?.sortType;
      dispatch(getRatingList({ companyId, page, sortType }));
    } else if (props?.memberId) {
      dispatch(getRatingListMember(props.memberId));
    }
  }, [
    props.companyId,
    props?.memberId,
    props.page,
    props.sortType,
    isSuccess,
    isSuccessMember,
    dispatch,
  ]);
  useEffect(() => {
    if (isSuccess === "deleteSuccess") {
      toast.success("Delete successfully");
    }
  }, [isSuccess]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={classes.containerComment}>
            {ratingList &&
              (ratingList.length > 0 ? (
                <>
                  <div className={classes.ratingLiWrapper}>
                    <ul className={classes.ratingUl}>
                      {ratingList?.map((item) => (
                        <RatingItem item={item} key={item.id}></RatingItem>
                      ))}
                    </ul>
                    <div className={classes.pagination}>
                      <Pagination
                        currentPage={props.page}
                        totalPages={ratingList[0].totalPage}
                        pageChange={props.pageChange}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className={classes.logoWrapper}>
                  <img
                    className={classes.logo}
                    src={"/noData.svg"}
                    alt="No data"
                  ></img>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default RatingList;
