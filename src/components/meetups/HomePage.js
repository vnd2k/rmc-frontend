import classes from "./HomePage.module.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
function Homepage() {
  return (
    <div className={classes.container}>
      <img
        className={classes.background}
        src="/background.jpg"
        alt="Background"
      ></img>

      <div className={classes.backgroundWrapper}>
        <div className={classes.backgroundText}>
          <p>
            <img
              className={classes.logo1}
              src="/logo1.png"
              alt="Background"
            ></img>
          </p>
        </div>
        <p className={classes.backgroundText}>
          Enter your <span className={classes.companyText}> company </span> to
          get started
        </p>
        <div className={classes.backgroundSearch}>
          <HiOutlineOfficeBuilding
            className={classes.backgroundIcon}
          ></HiOutlineOfficeBuilding>
          <input
            type="text"
            placeholder="Your company"
            className={classes.searchBox}
          ></input>
        </div>
      </div>

      <div className={classes.sloganWrapper}>
        <p className={classes.sloganTitle}>Slogan title</p>
        <p className={classes.sloganDescription}>Slogan description</p>
      </div>

      <div className={classes.bottomImageWrapper}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.bottomImage}
            src="/rating.svg"
            alt="Background"
          ></img>
        </div>
        <div className={classes.imageWrapper}>
          <img
            className={classes.bottomImage}
            src="/choose.svg"
            alt="Background"
          ></img>
        </div>
        <div className={classes.imageWrapper}>
          <img
            className={classes.bottomImage}
            src="/hidden.svg"
            alt="Background"
          ></img>
        </div>
      </div>

      <div className={classes.bottomImageWrapper}>
        <div className={classes.imageWrapper}>
          <p className={classes.bottomText}>Rate for your companies</p>
        </div>
        <div className={classes.imageWrapper}>
          <p className={classes.bottomText}>Like or dislike ratings</p>
        </div>
        <div className={classes.imageWrapper}>
          <p className={classes.bottomText}>
            Your ratings are always anonymous
          </p>
        </div>
      </div>

      <div className={classes.footer}>
        <p className={classes.footerText}>Footer</p>
      </div>
    </div>
  );
}

export default Homepage;
