import classes from "./MemberRatings.module.css";
import RatingList from "../../shared/components/RatingList";
import { useSelector } from "react-redux";

function MemberRatings(props) {
  const { member } = useSelector((state) => state.member);
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>Your rated list</h1>
      </div>
      <div className={classes.ratingList}>
        {member && <RatingList memberId={member?.id}></RatingList>}
      </div>
    </div>
  );
}

export default MemberRatings;
