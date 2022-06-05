import classes from "./CreatePostForm.module.css";
import React, { useState } from "react";

function CreatePostForm() {
  return (
    <div>
      {/* <div className={classes.headerWrapper}>
        <p className={classes.title}>
          Rate: <span className={classes.companyName}>FPT Software</span>
        </p>
      </div> */}

      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          <form className={classes.formContent}>
            <div className={classes.titleRating}>
              <p className={classes.titleRate}>Company Name</p>
              <input
                className={classes.titleInput}
                // placeholder="Title: Summarize your rating. Example: 'Greate Culture' or 'Good company for young Developer'"
              ></input>
            </div>

            <div className={classes.titleRating}>
              <p className={classes.titleRate}>Location</p>
              <input
                rows={4}
                className={classes.titleInput}
                // placeholder="What makes this company stand out? Example: 'Great office', 'Awesome company culture', 'Good remuneration'"
              ></input>
            </div>

            <div className={classes.titleRating}>
              <p className={classes.titleRate}>Overview</p>
              <textarea
                rows={4}
                className={classes.areaInput}
                // placeholder="What makes this company stand out? Example: 'Great office', 'Awesome company culture', 'Good remuneration'"
              ></textarea>
            </div>

            <div className={classes.titleRating}>
              <p className={classes.titleRate}>Key Skills</p>
              <textarea
                rows={4}
                className={classes.areaInput}
                // placeholder="What makes this company stand out? Example: 'Great office', 'Awesome company culture', 'Good remuneration'"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreatePostForm;
