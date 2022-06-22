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

function CompanyPost(props) {
  const { companyById } = useSelector((state) => state.company);
  const [isRead, setRead] = useState(true);
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
  }, [id, dispatch]);

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
              <h1 className={classes.companyName}>{companyById?.name}</h1>
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
            <Link to={`/rating/${id}`} className={classes.rateButton}>
              Rate Your Company
            </Link>
          </div>
        </div>
      </div>
      <div>
        <RatingList companyId={id}></RatingList>
      </div>
    </div>
  );
}
export default CompanyPost;
