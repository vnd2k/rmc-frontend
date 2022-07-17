import classes from "./ManageCompany.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CgArrowRightO } from "react-icons/cg";
import {
  getListCompany,
  searchListCompany,
} from "../../../stores/admin/adminSlice";
import {
  HiOutlineIdentification,
  HiOutlineLocationMarker,
  HiOutlineCog,
} from "react-icons/hi";
import { BiMailSend, BiBuildings, BiLink, BiSearchAlt } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { MdVerifiedUser, MdOutlineVerifiedUser } from "react-icons/md";
import Spinner from "../../../shared/components/Spinner";
import { useForm } from "react-hook-form";

function ManageCompany(props) {
  const dispatch = useDispatch();
  const { companyList, isLoading } = useSelector((state) => state.admin);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getListCompany());
  }, [dispatch]);

  const companyLink = (id) => {
    return `/company/${id}`;
  };

  const editCompanyLink = (id) => {
    return `/edit-company/${id}`;
  };

  const handle = (character) => {
    if (character) {
      dispatch(searchListCompany(character));
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>List company</h1>
      </div>
      <div className={classes.ratingList}>
        <div className={classes.containerComment}>
          <div className={classes.headerWrapper}>
            <Link className={classes.btnAdd} to={"/add-user"}>
              Add User
            </Link>
            <form
              className={classes.searchForm}
              onSubmit={handleSubmit(handle)}
            >
              <input
                type={"text"}
                className={classes.searchArea}
                placeholder={"Search by Id or Name"}
                {...register("character")}
              ></input>
              <button type={"submit"} className={classes.searchBtn}>
                <BiSearchAlt />
              </button>
            </form>
          </div>

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {companyList &&
                (companyList.length > 0 ? (
                  <>
                    <div className={classes.ratingLiWrapper}>
                      <ul className={classes.ratingUl}>
                        {companyList?.map((item) => (
                          <li className={classes.itemSearch} key={item.id}>
                            <div className={classes.ratingBody}>
                              <div className={classes.ratingTextWrapper}>
                                <div className={classes.logoWrapper}>
                                  {item?.logoImage ? (
                                    <img
                                      className={classes.logo}
                                      src={item?.logoImage}
                                      alt="logo"
                                    ></img>
                                  ) : (
                                    <img
                                      className={classes.logo}
                                      src="/logo.png"
                                      alt="logo"
                                    ></img>
                                  )}

                                  {item?.verified ? (
                                    <MdVerifiedUser
                                      className={classes.verifiedItem}
                                    ></MdVerifiedUser>
                                  ) : (
                                    <MdOutlineVerifiedUser
                                      className={classes.unVerifiedItem}
                                    ></MdOutlineVerifiedUser>
                                  )}
                                </div>
                              </div>

                              <div className={classes.ratingCommentWrapper}>
                                <div className={classes.commentTitle}>
                                  <div className={classes.nameWrapper}>
                                    <div className={classes.nameWrapper}>
                                      <Link
                                        to={companyLink(item.id)}
                                        className={classes.itemLink}
                                      >
                                        {item.name}
                                      </Link>
                                    </div>
                                  </div>
                                  <Link
                                    to={editCompanyLink(item.id)}
                                    className={classes.linkJob}
                                  >
                                    <CgArrowRightO></CgArrowRightO>
                                  </Link>
                                </div>
                                <div className={classes.commentDescription}>
                                  <div className={classes.locationWrapper}>
                                    <HiOutlineIdentification
                                      color="#ccc"
                                      fontSize="1.1em"
                                    />
                                    <div className={classes.location}>
                                      {item.id}
                                    </div>
                                  </div>

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
                                  <div className={classes.infoWrapper}>
                                    <div className={classes.locationWrapper}>
                                      <BiMailSend
                                        color="#ccc"
                                        fontSize="1.1em"
                                      />
                                      <div className={classes.location}>
                                        {item.email}
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
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className={classes.logoWrapper}>
                    <img
                      className={classes.noData}
                      src={"/noData.svg"}
                      alt="No data"
                    ></img>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageCompany;
