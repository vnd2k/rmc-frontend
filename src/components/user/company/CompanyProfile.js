import classes from "./CompanyProfile.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCompanyInfo,
  updateCompanyLogo,
  reset,
} from "../../../stores/company/companySlice";
import { useForm } from "react-hook-form";
import { MdVerifiedUser, MdOutlineVerifiedUser } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CompanyProfile(props) {
  const { user } = useSelector((state) => state.auth);
  const { company, isSuccess } = useSelector((state) => state.company);
  const [inputLogo, setInputLogo] = useState();
  const [previewLogo, setPreviewLogo] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handle = (data) => {
    const companyId = user?.userDetails?.id;
    const name = data?.name;
    const address = data?.address;
    const type = data?.type;
    const website = data?.website;
    const companySize = data?.companySize;
    const nation = data?.nation;
    const description = data?.description;

    if (companyId !== "") {
      dispatch(
        updateCompanyInfo({
          companyId,
          name,
          address,
          type,
          website,
          companySize,
          nation,
          description,
        })
      );
    }
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
        const companyId = user?.userDetails?.id;
        const logo = reader?.result;
        console.log(logo);
        dispatch(updateCompanyLogo({ companyId, logo }));
      }
    };
    reader.onerror = () => {};
  };

  useEffect(() => {
    if (isSuccess === "updateInfoSuccess") {
      toast.success("Update infomation successfully");
    }
    dispatch(reset());
  }, [isSuccess, dispatch]);
  return (
    <div className={classes.formWrapper}>
      {company && (
        <div className={classes.formCard}>
          <form onSubmit={handleSubmit(handle)} className={classes.formContent}>
            {" "}
            <div className={classes.title}>
              <h1 className={classes.titleText}>Company Profile</h1>
            </div>
            <div className={classes.editAvatar}>
              <label htmlFor="logo">
                {!company.logoImage && !previewLogo && (
                  <img src="/logo.png" alt="logo" className={classes.avatar} />
                )}
                {company.logoImage && !previewLogo && (
                  <img
                    className={classes.avatar}
                    src={company.logoImage}
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
              {company.verified ? (
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
                  defaultValue={company.name}
                  id="name"
                  name="name"
                  placeholder="Enter company's name here"
                  {...register("name", {
                    required: "Name is required",
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors.name && errors.name.message}
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
                  defaultValue={company.address}
                  id="address"
                  name="address"
                  placeholder="Enter address here"
                  {...register("address", {
                    required: "Address is required",
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors.address && errors.address.message}
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
                  defaultValue={company.type}
                  {...register("type", {
                    required: "Type is required",
                  })}
                >
                  <option value="Product">Product</option>
                  <option value="Outsourcing">Outsourcing</option>
                </select>
                <p className={classes.errorMsg}>
                  {errors.type && errors.type.message}
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
                  defaultValue={company.website}
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
                  {errors.website && errors.website.message}
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
                  defaultValue={company.nation}
                  id="nation"
                  name="nation"
                  placeholder="Enter company's nation here"
                  {...register("nation", {
                    required: "Nation is required",
                  })}
                ></input>
                <p className={classes.errorMsg}>
                  {errors.nation && errors.nation.message}
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
                  defaultValue={company.companySize}
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
                  {errors.companySize && errors.companySize.message}
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
                defaultValue={company.description}
                id="name"
                name="name"
                placeholder="Enter description here"
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>
              <p className={classes.errorMsg}>
                {errors.description && errors.description.message}
              </p>
            </div>
            <div className={classes.btnWrapper}>
              <button type="submit" className={classes.btnItem}>
                <span className={classes.btnWrapper}>Update</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CompanyProfile;
