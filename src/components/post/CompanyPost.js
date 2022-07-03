import classes from "./CompanyPost.module.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineLocationMarker, HiOutlineCog } from "react-icons/hi";
import { BiBuildings, BiLink } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getCompanyById } from "../../stores/company/companySlice";
import RatingList from "../../shared/components/RatingList";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { getSavedStatus, postSave } from "../../stores/member/memberSlice";
import { MdVerifiedUser, MdOutlineVerifiedUser } from "react-icons/md";
import { getListJobById } from "../../stores/company/companySlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CompanyPost(props) {
  const { companyById, jobList } = useSelector((state) => state.company);
  const { saved, isSuccessMember, member } = useSelector(
    (state) => state.member
  );
  const { ratingList, isLoading } = useSelector((state) => state.rating);
  const { user } = useSelector((state) => state.auth);
  const [isRead, setRead] = useState(true);
  // const [page, setPage] = useState(0);
  const page = 0;
  const [sortType, setSortType] = useState("popularity");
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const calPercent = (percent) => {
    const ratingCount = companyById?.ratings?.length;
    if (ratingCount) {
      return (percent / ratingCount) * 100;
    } else {
      return 0;
    }
  };

  const onReadMoreClicked = () => {
    setRead((prev) => !prev);
  };

  useEffect(() => {
    if (id) {
      dispatch(getCompanyById(id));
    }
  }, [id, dispatch, ratingList]);

  useEffect(() => {
    if (id) {
      dispatch(getSavedStatus(id));
    }
  }, [id, dispatch, isSuccess]);

  useEffect(() => {
    if (id) {
      dispatch(getListJobById(id));
    }
  }, [dispatch, id]);
  useEffect(() => {
    if (saved && isSuccessMember === "postSuccess") {
      if (!saved?.checked) {
        toast.info("Added to saved list");
      } else {
        toast.info("Removed to saved list");
      }
    }
  }, [dispatch, isSuccessMember, member, saved]);

  const handleSave = () => {
    dispatch(postSave(id));
  };

  const jobLink = (jobId) => {
    return `/detail-job/${jobId}`;
  };

  const handleFilterRating = (e) => {
    console.log(e.target.value);
    setSortType(e.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.detailLeft}>
          <div className={classes.title}>
            <div className={classes.logoWrapper}>
              <img
                className={classes.logo}
                src={companyById?.logoImage}
                alt="logo"
              ></img>
            </div>
            <div className={classes.infoContainer}>
              <div className={classes.nameCompanyWrapper}>
                <div className={classes.nameWrapper}>
                  <h1 className={classes.companyName}>{companyById?.name}</h1>
                  {companyById?.verified ? (
                    <MdVerifiedUser
                      className={classes.verifiedItem}
                    ></MdVerifiedUser>
                  ) : (
                    <MdOutlineVerifiedUser
                      className={classes.unVerifiedItem}
                    ></MdOutlineVerifiedUser>
                  )}
                </div>
                {saved?.checked ? (
                  <BsFillBookmarkFill
                    onClick={() => handleSave()}
                    className={classes.savedItem}
                  ></BsFillBookmarkFill>
                ) : (
                  <BsBookmark
                    onClick={() => handleSave()}
                    className={classes.unsavedItem}
                  ></BsBookmark>
                )}
              </div>
              <div className={classes.locationWrapper}>
                <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
                <div className={classes.location}>{companyById?.address}</div>
              </div>

              <div className={classes.infoWrapper}>
                <div className={classes.locationWrapper}>
                  <HiOutlineCog color="#ccc" fontSize="1.3em" />
                  <div className={classes.location}>{companyById?.type}</div>
                </div>

                <div className={classes.locationWrapper}>
                  <BsPeople color="#ccc" fontSize="1.3em" />
                  <div className={classes.location}>
                    {companyById?.companySize}
                  </div>
                </div>

                <div className={classes.locationWrapper}>
                  <BiBuildings color="#ccc" fontSize="1.3em" />
                  <div className={classes.location}>{companyById?.nation}</div>
                </div>
              </div>
              <div className={classes.locationWrapper}>
                <BiLink color="#ccc" fontSize="1.3em" />
                <a className={classes.location} href={companyById?.website}>
                  <span>{companyById?.website}</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.description}>
              <h2>Giới thiệu</h2>
              <div className={classes.descriptionWrapper}>
                <p
                  className={
                    isRead ? classes.descriptionDetail : classes.descriptionLess
                  }
                >
                  {companyById?.description}
                </p>
                <button
                  className={classes.btnReadMore}
                  onClick={onReadMoreClicked}
                >
                  {isRead ? "Read More" : "Read Less"}
                </button>
              </div>
            </div>
          </div>
          <div className={classes.ratingWrapper}>
            <p className={classes.numRatingCount}>
              {companyById?.ratings?.length} Ratings
            </p>
          </div>
          <div className={classes.selectWrapper}>
            <label>
              <select
                className={classes.selectItem}
                defaultValue={"popularity"}
                onChange={handleFilterRating}
                disabled={isLoading}
              >
                <option value="popularity">Sort by popularity</option>
                <option value="recent">Sort by most recent</option>
              </select>
            </label>
          </div>

          <div>
            <RatingList
              companyId={id}
              page={page}
              sortType={sortType}
            ></RatingList>
            <div>Paging</div>
          </div>
        </div>

        <div>
          <div>
            <div className={classes.avgRating}>
              <div className={classes.avgValueWrapper}>
                <div className={classes.avgValue}>
                  {companyById?.ratingScore}
                </div>
                <div className={classes.maxValue}>/ 5</div>
              </div>
            </div>
            <div className={classes.numRating}>
              <p>
                Overall Quality Based on{" "}
                <span className={classes.numCount}>
                  {companyById?.ratings?.length} ratings
                </span>
              </p>
            </div>
          </div>
          <div className={classes.rateBar}>
            <div className={classes.rateBarTitle}>
              <p className={classes.rateBarText}>Rating Distribution</p>
            </div>
            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Awesome <span className={classes.rateTypeNum}>5</span>
              </div>
              <div className={classes.barContainer}>
                <div
                  style={{
                    width: `${calPercent(companyById?.fiveStarCount)}%`,
                  }}
                  className={classes.bar5}
                ></div>
              </div>
              <div className={classes.rateCount}>
                {companyById?.fiveStarCount}
              </div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Great <span className={classes.rateTypeNum}>4</span>
              </div>
              <div className={classes.barContainer}>
                <div
                  style={{
                    width: `${calPercent(companyById?.fourStarCount)}%`,
                  }}
                  className={classes.bar4}
                ></div>
              </div>
              <div className={classes.rateCount}>
                {companyById?.fourStarCount}
              </div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Good <span className={classes.rateTypeNum}>3</span>
              </div>
              <div className={classes.barContainer}>
                <div
                  style={{
                    width: `${calPercent(companyById?.threeStarCount)}%`,
                  }}
                  className={classes.bar3}
                ></div>
              </div>
              <div className={classes.rateCount}>
                {companyById?.threeStarCount}
              </div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                OK <span className={classes.rateTypeNum}>2</span>
              </div>
              <div className={classes.barContainer}>
                <div
                  style={{
                    width: `${calPercent(companyById?.twoStarCount)}%`,
                  }}
                  className={classes.bar2}
                ></div>
              </div>
              <div className={classes.rateCount}>
                {companyById?.twoStarCount}
              </div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Awful <span className={classes.rateTypeNum}>1</span>
              </div>
              <div className={classes.barContainer}>
                <div
                  style={{
                    width: `${calPercent(companyById?.oneStarCount)}%`,
                  }}
                  className={classes.bar1}
                ></div>
              </div>
              <div className={classes.rateCount}>
                {companyById?.oneStarCount}
              </div>
            </div>
          </div>
          <div className={classes.rateButtonWrapper}>
            {user?.userDetails?.role === "MEMBER" && (
              <Link to={`/rating/${id}`} className={classes.rateButton}>
                Rate Your Company
              </Link>
            )}
          </div>

          <div className={classes.jobList}>
            {jobList &&
              (jobList.length > 0 ? (
                <>
                  <div className={classes.jobListTitle}>Recruitment</div>
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
                </>
              ) : (
                <p></p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CompanyPost;
