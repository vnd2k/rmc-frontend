import classes from "./ManageMember.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getListMember, deleteMember } from "../../../stores/admin/adminSlice";
import { HiOutlineIdentification } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

function ManageMember(props) {
  const dispatch = useDispatch();
  const { memberList, isSuccess } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getListMember());
  }, [dispatch, isSuccess]);

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteMember(id));
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>List member</h1>
      </div>
      <div className={classes.ratingList}>
        <div className={classes.containerComment}>
          <Link className={classes.btnAdd} to={"/add-user"}>
            Add User
          </Link>
          {memberList &&
            (memberList.length > 0 ? (
              <>
                <div className={classes.ratingLiWrapper}>
                  <ul className={classes.ratingUl}>
                    {memberList?.map((item) => (
                      <li className={classes.itemSearch} key={item.id}>
                        <div className={classes.ratingBody}>
                          <div className={classes.ratingTextWrapper}>
                            <div className={classes.logoWrapper}>
                              {item?.avatar ? (
                                <img
                                  className={classes.logo}
                                  src={item?.avatar}
                                  alt="logo"
                                ></img>
                              ) : (
                                <img
                                  className={classes.logo}
                                  src="/logo.png"
                                  alt="logo"
                                ></img>
                              )}
                            </div>
                          </div>

                          <div className={classes.ratingCommentWrapper}>
                            <div className={classes.commentTitle}>
                              <h2>{item.name}</h2>
                              <MdCancel
                                onClick={() => handleDelete(item.id)}
                                className={classes.deleteBtn}
                              ></MdCancel>
                            </div>
                            <div className={classes.commentDescription}>
                              <div className={classes.locationWrapper}>
                                <BiMailSend color="#ccc" fontSize="1.1em" />
                                <div className={classes.location}>
                                  {item.email}
                                </div>
                              </div>

                              <div className={classes.locationWrapper}>
                                <HiOutlineIdentification
                                  color="#ccc"
                                  fontSize="1.1em"
                                />
                                <div className={classes.location}>
                                  {item.id}
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
              <p></p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ManageMember;
