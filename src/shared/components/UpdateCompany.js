import classes from "./UpdateCompany.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { MdVerifiedUser, MdOutlineVerifiedUser } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { useParams } from "react-router-dom";
import {
  getCompanyById,
  putCompany,
  putCompanyLogo,
  deleteCompany,
  reset,
} from "../../stores/admin/adminSlice";
import { useHistory } from "react-router-dom";

function UpdateCompany(props) {
  const { company, isSuccess } = useSelector((state) => state.admin);
  const [inputLogo, setInputLogo] = useState();
  const [previewLogo, setPreviewLogo] = useState("");
  const [verified, setVerified] = useState(!!company?.verified);
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChangeVerified = (e) => {
    setVerified(e.target.checked);
  };

  useEffect(() => {
    if (id) {
      dispatch(getCompanyById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setVerified(!!company?.verified);
  }, [company]);

  const handle = (data) => {
    const companyId = id;
    dispatch(putCompany({ companyId, verified, data }));
  };

  const handleInputLogo = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    previewFile(file);
    setInputLogo(e.target.value);
    handleSubmitLogo(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewLogo(reader.result);
    };
  };

  const handleSubmitLogo = (file) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        const companyId = id;
        const logo = reader?.result;
        console.log(logo);
        dispatch(putCompanyLogo({ companyId, logo }));
      }
    };
    reader.onerror = () => {};
  };

  const handleDelete = () => {
    if (id) {
      dispatch(deleteCompany(id));
    }
  };

  useEffect(() => {
    if (isSuccess === "putCompany" || isSuccess === "deleteCompany") {
      reset();
      history.push(`/manage-company`);
    }
  }, [isSuccess, dispatch, history]);
  return (
    <div className={classes.formWrapper}>
      <div className={classes.formCard}>
        {id === company?.id && (
          <form onSubmit={handleSubmit(handle)} className={classes.formContent}>
            {" "}
            <div className={classes.title}>
              <h1 className={classes.titleText}>Company Profile</h1>

              <MdCancel
                onClick={() => handleDelete()}
                className={classes.deleteBtn}
              ></MdCancel>
            </div>
            <div className={classes.editAvatar}>
              <label htmlFor="logo">
                {!company?.logoImage && !previewLogo && (
                  <img src="/logo.png" alt="logo" className={classes.avatar} />
                )}
                {company?.logoImage && !previewLogo && (
                  <img
                    className={classes.avatar}
                    src={company?.logoImage}
                    alt="logo"
                  />
                )}
                {previewLogo && (
                  <img
                    src={previewLogo}
                    alt="logo"
                    className={classes.avatar}
                  />
                )}
              </label>
              <input
                className={classes.pickAvatar}
                type={"file"}
                id="logo"
                name="logo"
                accept="image/png, image/jpeg"
                value={inputLogo}
                onChange={handleInputLogo}
              ></input>
              {company?.verified ? (
                <MdVerifiedUser
                  className={classes.verifiedItem}
                ></MdVerifiedUser>
              ) : (
                <MdOutlineVerifiedUser
                  className={classes.unVerifiedItem}
                ></MdOutlineVerifiedUser>
              )}
            </div>
            <div className={classes.infoWrapper}>
              <div className={classes.pickNickname}>
                <span>
                  <label className={classes.nicknameLabel} htmlFor="nickname">
                    Name
                  </label>
                  <p className={classes.nicknameDetail}>
                    Name of your company to be displayed on RMC.
                  </p>
                </span>
                <input
                  className={classes.nicknameInput}
                  type={"text"}
                  defaultValue={company?.name}
                  id="name"
                  name="name"
                  placeholder="Enter company's name here"
                  {...register("name", {
                    required: "Name is required",
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors?.name && errors.name.message}
                </p>
              </div>
              <div className={classes.pickNickname}>
                <span>
                  <label className={classes.nicknameLabel} htmlFor="nickname">
                    Address
                  </label>
                  <p className={classes.nicknameDetail}>
                    Address of your company.
                  </p>
                </span>
                <input
                  className={classes.nicknameInput}
                  type={"text"}
                  defaultValue={company?.address}
                  id="address"
                  name="address"
                  placeholder="Enter address here"
                  {...register("address", {
                    required: "Address is required",
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors?.address && errors.address.message}
                </p>
              </div>

              <div className={classes.pickNickname}>
                <span>
                  <label className={classes.nicknameLabel} htmlFor="nickname">
                    Type
                  </label>
                  <p className={classes.nicknameDetail}>
                    Business type of your company.
                  </p>
                </span>
                <select
                  className={classes.nicknameInput}
                  id="type"
                  name="type"
                  {...register("type", {
                    required: "Type is required",
                  })}
                >
                  <option value="product">Product</option>
                  <option value="outsourcing">Outsourcing</option>
                </select>
                <p className={classes.errorMsg}>
                  {errors?.type && errors.type.message}
                </p>
              </div>
              <div className={classes.pickNickname}>
                <span>
                  <label className={classes.nicknameLabel} htmlFor="nickname">
                    Website
                  </label>
                  <p className={classes.nicknameDetail}>
                    Website of your company.
                  </p>
                </span>
                <input
                  className={classes.nicknameInput}
                  type={"text"}
                  defaultValue={company?.website}
                  id="website"
                  name="website"
                  placeholder="Enter website of company here"
                  {...register("website", {
                    required: "Website is required",
                    pattern: {
                      value:
                        /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/,
                      message: "Website is invalid",
                    },
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors?.website && errors.website.message}
                </p>
              </div>
              <div className={classes.pickNickname}>
                <span>
                  <label className={classes.nicknameLabel} htmlFor="nickname">
                    Nation
                  </label>
                  <p className={classes.nicknameDetail}>
                    Nation of your company.
                  </p>
                </span>
                <input
                  className={classes.nicknameInput}
                  type={"text"}
                  defaultValue={company?.nation}
                  id="nation"
                  name="nation"
                  placeholder="Enter company's nation here"
                  {...register("nation", {
                    required: "Nation is required",
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors?.nation && errors.nation.message}
                </p>
              </div>
              <div className={classes.pickNickname}>
                <span>
                  <label className={classes.nicknameLabel} htmlFor="nickname">
                    Company size
                  </label>
                  <p className={classes.nicknameDetail}>
                    Number of employees in your company.
                  </p>
                </span>
                <select
                  className={classes.nicknameInput}
                  id="companySize"
                  name="companySize"
                  {...register("companySize", {
                    required: "Size of company is required",
                  })}
                >
                  <option value="1-50">1-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                  <option value="1000+">1000+</option>
                </select>
                <p className={classes.errorMsg}>
                  {errors?.companySize && errors.companySize.message}
                </p>
              </div>
            </div>
            <div className={classes.pickNickname}>
              <span>
                <label className={classes.nicknameLabel} htmlFor="nickname">
                  Description
                </label>
                <p className={classes.nicknameDetail}>Overview your company.</p>
              </span>
              <textarea
                rows={6}
                className={classes.descriptionInput}
                type={"text"}
                defaultValue={company?.description}
                id="name"
                name="name"
                placeholder="Enter description here"
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>
              <p className={classes.errorMsg}>
                {errors?.description && errors.description.message}
              </p>
            </div>{" "}
            <div className={classes.pickVerify}>
              <label className={classes.verifyLabel} htmlFor="nickname">
                Verify status
              </label>
              <label className={classes.switch}>
                <input
                  type="checkbox"
                  checked={verified}
                  onChange={handleChangeVerified}
                />
                <span className={`${classes.slider} ${classes.round}`}></span>
              </label>
            </div>
            <div className={classes.btnWrapper}>
              <button type="submit" className={classes.btnItem}>
                <span className={classes.btnWrapper}>Update</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UpdateCompany;
