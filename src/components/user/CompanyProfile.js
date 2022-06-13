import classes from "./CompanyProfile.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCompanyInfo } from "../../stores/company/companySlice";
import { useForm } from "react-hook-form";

function CompanyProfile(props) {
  const { user } = useSelector((state) => state.auth);
  const { company } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handle = (data) => {
    const companyId = user?.userDetails?.id;
    const name = data?.name;
    const address = data?.address;
    const type = data?.type;
    const website = data?.website;
    const companySize = data?.companySize;
    const nation = data?.nation;
    const description = data?.description;

    console.log(companyId);
    if (companyId !== "") {
      console.log("ok");
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
  console.log(company);

  return (
    <div>
      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          <form onSubmit={handleSubmit(handle)} className={classes.formContent}>
            {" "}
            <div className={classes.title}>
              <h1 className={classes.titleText}>Company Profile</h1>
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
                        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                      message: "Website is invalid",
                    },
                  })}
                ></input>
              </div>
              <div className={classes.pickNickname}>
                <span>
                  <label className={classes.nicknameLabel} htmlFor="nickname">
                    Nation
                  </label>
                  <p className={classes.nicknameDetail}></p>
                  Nation of your company.
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
            </div>
            <div className={classes.btnWrapper}>
              <button type="submit" className={classes.btnItem}>
                <span className={classes.btnWrapper}>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
