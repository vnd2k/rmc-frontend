import classes from "./MemberRatings.module.css";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

function MemberRatings(props) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.titleText}>Your rated list</h1>
      </div>

      <div className={classes.ratingBody}>
        <div className={classes.ratingTextWrapper}>
          <div className={classes.ratingTitle}>QUALITY</div>
          <div className={classes.goodRatingValue}>5</div>
        </div>

        <div className={classes.ratingCommentWrapper}>
          <div className={classes.commentTitle}>
            <div className={classes.nameWrapper}>
              <div className={classes.nameWrapper}>
                <p className={classes.commentName}>Anonymous</p>
              </div>
            </div>
            <div className={classes.dateRating}>May 12th, 2022</div>
          </div>
          <div className={classes.commentDescription}>
            <p className={classes.comment}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              quo, repudiandae quas laudantium facilis esse delectus nulla
              suscipit, sunt numquam quos praesentium. Repudiandae nobis dolor
              alias aperiam inventore, nihil ratione!
            </p>
          </div>
          <div className={classes.ratingFooter}>
            <div className={classes.voteRatingWrapper}>
              <div>
                <BiLike className={classes.likeButton} />0
              </div>
              <div>
                <BiDislike className={classes.disLikeButton} />0
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ratingBody}>
        <div className={classes.ratingTextWrapper}>
          <div className={classes.ratingTitle}>QUALITY</div>
          <div className={classes.goodRatingValue}>4</div>
        </div>

        <div className={classes.ratingCommentWrapper}>
          <div className={classes.commentTitle}>
            <div className={classes.nameWrapper}>
              <div className={classes.nameWrapper}>
                <p className={classes.commentName}>Anonymous</p>
              </div>
            </div>
            <div className={classes.dateRating}>May 12th, 2022</div>
          </div>
          <div className={classes.commentDescription}>
            <p className={classes.comment}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              quo, repudiandae quas laudantium facilis esse delectus nulla
              suscipit, sunt numquam quos praesentium. Repudiandae nobis dolor
              alias aperiam inventore, nihil ratione!
            </p>
          </div>
          <div className={classes.ratingFooter}>
            <div className={classes.voteRatingWrapper}>
              <div>
                <BiLike className={classes.likeButton} />0
              </div>
              <div>
                <BiDislike className={classes.disLikeButton} />0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ratingBody}>
        <div className={classes.ratingTextWrapper}>
          <div className={classes.ratingTitle}>QUALITY</div>
          <div className={classes.okRatingValue}>3</div>
        </div>

        <div className={classes.ratingCommentWrapper}>
          <div className={classes.commentTitle}>
            <div className={classes.nameWrapper}>
              <div className={classes.nameWrapper}>
                <p className={classes.commentName}>Anonymous</p>
              </div>
            </div>
            <div className={classes.dateRating}>May 12th, 2022</div>
          </div>
          <div className={classes.commentDescription}>
            <p className={classes.comment}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              quo, repudiandae quas laudantium facilis esse delectus nulla
              suscipit, sunt numquam quos praesentium. Repudiandae nobis dolor
              alias aperiam inventore, nihil ratione!
            </p>
          </div>
          <div className={classes.ratingFooter}>
            <div className={classes.voteRatingWrapper}>
              <div>
                <BiLike className={classes.likeButton} />0
              </div>
              <div>
                <BiDislike className={classes.disLikeButton} />0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ratingBody}>
        <div className={classes.ratingTextWrapper}>
          <div className={classes.ratingTitle}>QUALITY</div>
          <div className={classes.badRatingValue}>2</div>
        </div>

        <div className={classes.ratingCommentWrapper}>
          <div className={classes.commentTitle}>
            <div className={classes.nameWrapper}>
              <div className={classes.nameWrapper}>
                <p className={classes.commentName}>Anonymous</p>
              </div>
            </div>
            <div className={classes.dateRating}>May 12th, 2022</div>
          </div>
          <div className={classes.commentDescription}>
            <p className={classes.comment}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              quo, repudiandae quas laudantium facilis esse delectus nulla
              suscipit, sunt numquam quos praesentium. Repudiandae nobis dolor
              alias aperiam inventore, nihil ratione!
            </p>
          </div>
          <div className={classes.ratingFooter}>
            <div className={classes.voteRatingWrapper}>
              <div>
                <BiLike className={classes.likeButton} />0
              </div>
              <div>
                <BiDislike className={classes.disLikeButton} />0
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ratingBody}>
        <div className={classes.ratingTextWrapper}>
          <div className={classes.ratingTitle}>QUALITY</div>
          <div className={classes.badRatingValue}>1</div>
        </div>
        <div className={classes.ratingCommentWrapper}>
          <div className={classes.commentTitle}>
            <div className={classes.nameWrapper}>
              <div className={classes.nameWrapper}>
                <p className={classes.commentName}>Anonymous</p>
              </div>
            </div>
            <div className={classes.dateRating}>May 12th, 2022</div>
          </div>
          <div className={classes.commentDescription}>
            <p className={classes.comment}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              quo, repudiandae quas laudantium facilis esse delectus nulla
              suscipit, sunt numquam quos praesentium. Repudiandae nobis dolor
              alias aperiam inventore, nihil ratione!
            </p>
          </div>
          <div className={classes.ratingFooter}>
            <div className={classes.voteRatingWrapper}>
              <div className={classes.likeWrapper}>
                <BiLike className={classes.likeButton} />0
              </div>
              <div>
                <BiDislike className={classes.disLikeButton} />0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberRatings;
