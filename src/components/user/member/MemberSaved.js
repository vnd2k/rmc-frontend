import classes from "./MemberSaved.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListSaved } from "../../../stores/member/memberSlice";
import { HiOutlineLocationMarker, HiOutlineCog } from "react-icons/hi";
import { BiBuildings, BiLink } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import Spinner from "../../../shared/components/Spinner";

function MemberSaved(props) {
  const dispatch = useDispatch();
  const { savedList, isLoading } = useSelector((state) => state.member);

  useEffect(() => {
    dispatch(getListSaved());
  }, [dispatch]);

  const companyLink = (id) => {
    return `/company/${id}`;
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>Your saved list</h1>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.ratingList}>
          <div className={classes.containerComment}>
            {savedList &&
              (savedList.length > 0 ? (
                <>
                  <div className={classes.ratingLiWrapper}>
                    <ul className={classes.ratingUl}>
                      {savedList?.map((item) => (
                        <li className={classes.itemSearch} key={item.id}>
                          <div className={classes.ratingBody}>
                            <div className={classes.ratingTextWrapper}>
                              <div className={classes.logoWrapper}>
                                <img
                                  className={classes.logo}
                                  src={item?.logoImage}
                                  alt="logo"
                                ></img>
                              </div>
                            </div>

                            <div className={classes.ratingCommentWrapper}>
                              <div className={classes.commentTitle}>
                                <div className={classes.nameWrapper}>
                                  <div className={classes.nameWrapper}>
                                    <Link
                                      to={companyLink(item.companyId)}
                                      className={classes.itemLink}
                                    >
                                      {item.name}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.commentDescription}>
                                <div className={classes.locationWrapper}>
                                  <HiOutlineLocationMarker
                                    color="#ccc"
                                    fontSize="1.1em"
                                  />
                                  <div className={classes.location}>
                                    {item.address}
                                  </div>
                                </div>

                                <div className={classes.infoWrapper}>
                                  <div className={classes.locationWrapper}>
                                    <HiOutlineCog
                                      color="#ccc"
                                      fontSize="1.1em"
                                    />
                                    <div className={classes.location}>
                                      {item.type}
                                    </div>
                                  </div>

                                  <div className={classes.locationWrapper}>
                                    <BsPeople color="#ccc" fontSize="1.1em" />
                                    <div className={classes.location}>
                                      {item.companySize}
                                    </div>
                                  </div>

                                  <div className={classes.locationWrapper}>
                                    <BiBuildings
                                      color="#ccc"
                                      fontSize="1.1em"
                                    />
                                    <div className={classes.location}>
                                      {item.nation}
                                    </div>
                                  </div>
                                </div>

                                <div className={classes.locationWrapper}>
                                  <BiLink color="#ccc" fontSize="1.1em" />
                                  <a
                                    className={classes.location}
                                    href={item.website}
                                  >
                                    <span>{item.website}</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <p></p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberSaved;
