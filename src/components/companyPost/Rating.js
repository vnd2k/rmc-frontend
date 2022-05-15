import classes from "./Rating.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillStarFill } from "react-icons/bs";
import React, { useState } from "react";
function Rating() {
  const [star, setStar] = useState();

  const onStarChange = (event) => {
    setStar(event.target.value);
  };
  console.log(star);
  return (
    <div>
      <div className={classes.headerWrapper}>
        <p className={classes.title}>
          Rate: <span className={classes.companyName}>FPT Software</span>
        </p>
        <div className={classes.locationWrapper}>
          <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
          <div className={classes.location}>
            FPT Complex, Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng
          </div>
        </div>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          <form className={classes.formContent}>
            <div className={classes.titleRating}>
              <p className={classes.titleRate}>
                Title<span className={classes.spanItem}>*</span>
              </p>
              <input
                className={classes.titleInput}
                placeholder="Title: Summarize your rating. Example: 'Greate Culture' or 'Good company for young Developer'"
              ></input>
            </div>

            <div className={classes.likeThings}>
              <p className={classes.titleRate}>
                What you like about the company?
                <span className={classes.spanItem}>*</span>
              </p>
              <textarea
                rows={4}
                className={classes.areaInput}
                placeholder="What makes this company stand out? Example: 'Great office', 'Awesome company culture', 'Good remuneration'"
              ></textarea>
            </div>

            <div className={classes.likeThings}>
              <p className={classes.titleRate}>
                What the company needs to improve?
                <span className={classes.spanItem}>*</span>
              </p>
              <textarea
                rows={4}
                className={classes.areaInput}
                placeholder="What do you think the company needs to improve on? For example: 'When there is a project, the OT is a bit too much, putting pressure on the staff, so the estimation step needs to be improved. Meetings and reports take a lot of time, so these should be reduced.'"
              ></textarea>
            </div>

            <div className={classes.rateStar}>
              <p className={classes.titleRate}>
                Rate your company<span className={classes.spanItem}>*</span>
              </p>
              <div className={classes.getRating}>
                <div className={classes.ratingSlider}>
                  <div className={classes.ratingRange}>
                    <div>
                      <input
                        type={"radio"}
                        name={"star"}
                        id={"1"}
                        value={1}
                        onChange={onStarChange}
                        className={classes.inputWrapper}
                      />
                      <label htmlFor="1">
                        <BsFillStarFill
                          className={
                            1 <= star
                              ? classes.ratingStar
                              : classes.ratingStarFalse
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <input
                        type={"radio"}
                        name={"star"}
                        id={"2"}
                        value={2}
                        onChange={onStarChange}
                        className={classes.inputWrapper}
                      />
                      <label htmlFor="2">
                        <BsFillStarFill
                          className={
                            2 <= star
                              ? classes.ratingStar
                              : classes.ratingStarFalse
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <input
                        type={"radio"}
                        name={"star"}
                        id={"3"}
                        value={3}
                        onChange={onStarChange}
                        className={classes.inputWrapper}
                      />
                      <label htmlFor="3">
                        <BsFillStarFill
                          className={
                            3 <= star
                              ? classes.ratingStar
                              : classes.ratingStarFalse
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <input
                        type={"radio"}
                        name={"star"}
                        id={"4"}
                        value={4}
                        onChange={onStarChange}
                        className={classes.inputWrapper}
                      />
                      <label htmlFor="4">
                        <BsFillStarFill
                          className={
                            4 <= star
                              ? classes.ratingStar
                              : classes.ratingStarFalse
                          }
                        />
                      </label>
                    </div>
                    <div>
                      <input
                        type={"radio"}
                        name={"star"}
                        id={"5"}
                        value={5}
                        onChange={onStarChange}
                        className={classes.inputWrapper}
                      />
                      <label htmlFor="5">
                        <BsFillStarFill
                          className={
                            5 <= star
                              ? classes.ratingStar
                              : classes.ratingStarFalse
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.btnWrapper}>
              <button className={classes.rateButton}>Confirm Rating</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rating;
