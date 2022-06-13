import classes from "./CompanyPost.module.css";
import React, { useState } from "react";
import { HiOutlineLocationMarker, HiOutlineCog } from "react-icons/hi";
import { BiFlag, BiBuildings, BiDislike, BiLike, BiLink } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

function CompanyPost() {
  const [isRead, setRead] = useState(true);
  const onReadMoreClicked = () => {
    setRead((prev) => !prev);
  };
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.detailLeft}>
          <div className={classes.title}>
            <div className={classes.logoWrapper}>
              <img
                className={classes.logo}
                src="/fpt.jpg"
                alt="Background"
              ></img>
            </div>
            <div className={classes.infoContainer}>
              <h1 className={classes.companyName}>FPT Software</h1>
              <div className={classes.locationWrapper}>
                <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
                <div className={classes.location}>
                  FPT Complex, Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng
                </div>
              </div>

              <div className={classes.infoWrapper}>
                <div className={classes.locationWrapper}>
                  <HiOutlineCog color="#ccc" fontSize="1.3em" />
                  <div className={classes.location}>Outsourcing</div>
                </div>

                <div className={classes.locationWrapper}>
                  <BsPeople color="#ccc" fontSize="1.3em" />
                  <div className={classes.location}>1000+</div>
                </div>

                <div className={classes.locationWrapper}>
                  <BiBuildings color="#ccc" fontSize="1.3em" />
                  <div className={classes.location}>Viet Nam</div>
                </div>
              </div>
              <div className={classes.locationWrapper}>
                <BiLink color="#ccc" fontSize="1.3em" />
                <a
                  className={classes.location}
                  href="https://www.fpt-software.com"
                >
                  <span>https://www.fpt-software.com</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.description}>
              <h2>Giới thiệu</h2>
              <div className={classes.descriptionWrapper}>
                <p
                  className={
                    isRead ? classes.descriptionDetail : classes.descriptionLess
                  }
                >
                  Sau 12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã
                  không ngừng lớn mạnh và trở thành công ty công nghệ thông tin
                  có quy mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu
                  5001 nhân sự vào năm 2020. Sau 12 năm hoạt động (từ
                  13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh và
                  trở thành công ty công nghệ thông tin có quy mô lớn nhất miền
                  Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm
                  2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software Đà
                  Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động
                  (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh
                  và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                  miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào
                  năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                  Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                  thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng
                  tới mục tiêu 5001 nhân sự vào năm 2020.
                </p>
                <button
                  className={classes.btnReadMore}
                  onClick={onReadMoreClicked}
                >
                  {isRead ? "Read More" : "Read Less"}
                </button>
              </div>
            </div>
          </div>
          <div className={classes.ratingWrapper}>
            <p className={classes.numRatingCount}>5 Ratings</p>
          </div>
        </div>

        <div>
          <div>
            <div className={classes.avgRating}>
              <div className={classes.avgValueWrapper}>
                <div className={classes.avgValue}>3.5</div>
                <div className={classes.maxValue}>/ 5</div>
              </div>
            </div>
            <div className={classes.numRating}>
              <p>
                Overall Quality Based on{" "}
                <span className={classes.numCount}>59 ratings</span>
              </p>
            </div>
          </div>
          <div className={classes.rateBar}>
            <div className={classes.rateBarTitle}>
              <p className={classes.rateBarText}>Rating Distribution</p>
            </div>
            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Awesome <span className={classes.rateTypeNum}>5</span>
              </div>
              <div className={classes.barContainer}>
                <div className={classes.bar5}></div>
              </div>
              <div className={classes.rateCount}>25</div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Great <span className={classes.rateTypeNum}>4</span>
              </div>
              <div className={classes.barContainer}>
                <div className={classes.bar4}></div>
              </div>
              <div className={classes.rateCount}>24</div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Good <span className={classes.rateTypeNum}>3</span>
              </div>
              <div className={classes.barContainer}>
                <div className={classes.bar3}></div>
              </div>
              <div className={classes.rateCount}>4</div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                OK <span className={classes.rateTypeNum}>2</span>
              </div>
              <div className={classes.barContainer}>
                <div className={classes.bar2}></div>
              </div>
              <div className={classes.rateCount}>1</div>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.rateType}>
                Awful <span className={classes.rateTypeNum}>1</span>
              </div>
              <div className={classes.barContainer}>
                <div className={classes.bar1}></div>
              </div>
              <div className={classes.rateCount}>5</div>
            </div>
          </div>
          <div className={classes.rateButtonWrapper}>
            <a href="/rating" className={classes.rateButton}>
              Rate This Company
            </a>
          </div>
        </div>
      </div>

      <div className={classes.containerComment}>
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
                  <BiLike
                    href="http://localhost:3000"
                    className={classes.likeButton}
                  />
                  0
                </div>
                <div>
                  <BiDislike
                    href="http://localhost:3000"
                    className={classes.disLikeButton}
                  />
                  0
                </div>
              </div>
              <div className={classes.report}>
                <BiFlag
                  className={classes.reportIcon}
                  href="http://localhost:3000"
                />
                <span className={classes.reportText}>Report this rating</span>
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
                  <BiLike
                    href="http://localhost:3000"
                    className={classes.likeButton}
                  />
                  0
                </div>
                <div>
                  <BiDislike
                    href="http://localhost:3000"
                    className={classes.disLikeButton}
                  />
                  0
                </div>
              </div>
              <div className={classes.report}>
                <BiFlag
                  className={classes.reportIcon}
                  href="http://localhost:3000"
                />
                <span className={classes.reportText}>Report this rating</span>
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
                  <BiLike
                    href="http://localhost:3000"
                    className={classes.likeButton}
                  />
                  0
                </div>
                <div>
                  <BiDislike
                    href="http://localhost:3000"
                    className={classes.disLikeButton}
                  />
                  0
                </div>
              </div>
              <div className={classes.report}>
                <BiFlag
                  className={classes.reportIcon}
                  href="http://localhost:3000"
                />
                <span className={classes.reportText}>Report this rating</span>
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
                  <BiLike
                    href="http://localhost:3000"
                    className={classes.likeButton}
                  />
                  0
                </div>
                <div>
                  <BiDislike
                    href="http://localhost:3000"
                    className={classes.disLikeButton}
                  />
                  0
                </div>
              </div>
              <div className={classes.report}>
                <BiFlag
                  className={classes.reportIcon}
                  href="http://localhost:3000"
                />
                <span className={classes.reportText}>Report this rating</span>
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
                  <BiLike
                    href="http://localhost:3000"
                    className={classes.likeButton}
                  />
                  0
                </div>
                <div>
                  <BiDislike
                    href="http://localhost:3000"
                    className={classes.disLikeButton}
                  />
                  0
                </div>
              </div>
              <div className={classes.report}>
                <BiFlag
                  className={classes.reportIcon}
                  href="http://localhost:3000"
                />
                <span className={classes.reportText}>Report this rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CompanyPost;
