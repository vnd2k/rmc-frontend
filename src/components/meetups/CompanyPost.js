import classes from "./CompanyPost.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";
import ReactReadMoreReadLess from "react-read-more-read-less";

function CompanyPost() {
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
            <div>
              <h1 className={classes.companyName}>FPT Software</h1>
              <div className={classes.locationWrapper}>
                <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
                <div className={classes.location}>
                  FPT Complex, Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng
                </div>
              </div>
            </div>
          </div>
          {/* <div className={classes.locationWrapper}>
            <HiOutlineLocationMarker color="#ccc" fontSize="1.3em" />
            <div className={classes.location}>
              FPT Complex, Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng
            </div>
          </div> */}
          <div>
            <div className={classes.description}>
              <h2>Giới thiệu</h2>
              <ReactReadMoreReadLess
                charLimit={800}
                readMoreText={"Read more"}
                readLessText={"Read less"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                Sau 12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã
                không ngừng lớn mạnh và trở thành công ty công nghệ thông tin có
                quy mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu 5001
                nhân sự vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT
                Software Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty
                công nghệ thông tin có quy mô lớn nhất miền Trung. Công ty đang
                hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt
                động (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn
                mạnh và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm
                2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng
                đã không ngừng lớn mạnh và trở thành công ty công nghệ thông tin
                có quy mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu
                5001 nhân sự vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005),
                FPT Software Đà Nẵng đã không ngừng lớn mạnh và trở thành công
                ty công nghệ thông tin có quy mô lớn nhất miền Trung. Công ty
                đang hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm
                hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng
                lớn mạnh và trở thành công ty công nghệ thông tin có quy mô lớn
                nhất miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự
                vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng tới
                mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động (từ
                13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh và trở
                thành công ty công nghệ thông tin có quy mô lớn nhất miền Trung.
                Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau
                12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã không
                ngừng lớn mạnh và trở thành công ty công nghệ thông tin có quy
                mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu 5001
                nhân sự vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT
                Software Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty
                công nghệ thông tin có quy mô lớn nhất miền Trung. Công ty đang
                hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt
                động (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn
                mạnh và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm
                2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng
                đã không ngừng lớn mạnh và trở thành công ty công nghệ thông tin
                có quy mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu
                5001 nhân sự vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005),
                FPT Software Đà Nẵng đã không ngừng lớn mạnh và trở thành công
                ty công nghệ thông tin có quy mô lớn nhất miền Trung. Công ty
                đang hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm
                hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng
                lớn mạnh và trở thành công ty công nghệ thông tin có quy mô lớn
                nhất miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự
                vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng tới
                mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động (từ
                13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh và trở
                thành công ty công nghệ thông tin có quy mô lớn nhất miền Trung.
                Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau
                12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã không
                ngừng lớn mạnh và trở thành công ty công nghệ thông tin có quy
                mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu 5001
                nhân sự vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT
                Software Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty
                công nghệ thông tin có quy mô lớn nhất miền Trung. Công ty đang
                hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt
                động (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn
                mạnh và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm
                2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng
                đã không ngừng lớn mạnh và trở thành công ty công nghệ thông tin
                có quy mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu
                5001 nhân sự vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005),
                FPT Software Đà Nẵng đã không ngừng lớn mạnh và trở thành công
                ty công nghệ thông tin có quy mô lớn nhất miền Trung. Công ty
                đang hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm
                hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng
                lớn mạnh và trở thành công ty công nghệ thông tin có quy mô lớn
                nhất miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự
                vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT Software
                Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty công nghệ
                thông tin có quy mô lớn nhất miền Trung. Công ty đang hướng tới
                mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt động (từ
                13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn mạnh và trở
                thành công ty công nghệ thông tin có quy mô lớn nhất miền Trung.
                Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau
                12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã không
                ngừng lớn mạnh và trở thành công ty công nghệ thông tin có quy
                mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu 5001
                nhân sự vào năm 2020. Sau 12 năm hoạt động (từ 13/08/2005), FPT
                Software Đà Nẵng đã không ngừng lớn mạnh và trở thành công ty
                công nghệ thông tin có quy mô lớn nhất miền Trung. Công ty đang
                hướng tới mục tiêu 5001 nhân sự vào năm 2020. Sau 12 năm hoạt
                động (từ 13/08/2005), FPT Software Đà Nẵng đã không ngừng lớn
                mạnh và trở thành công ty công nghệ thông tin có quy mô lớn nhất
                miền Trung. Công ty đang hướng tới mục tiêu 5001 nhân sự vào năm
                2020.
              </ReactReadMoreReadLess>
              {/* <p>
                Sau 12 năm hoạt động (từ 13/08/2005), FPT Software Đà Nẵng đã
                không ngừng lớn mạnh và trở thành công ty công nghệ thông tin có
                quy mô lớn nhất miền Trung. Công ty đang hướng tới mục tiêu 5001
                nhân sự vào năm 2020.{" "}
              </p>
              <p>
                Từ một văn phòng sản xuất phần mềm với quy mô 50 người, đến hết
                2017, công ty đã phát triển lên quy mô hơn 2.700 người, mang lại
                việc làm cho hàng nghìn tri thức trẻ xuất thân miền Trung. Hàng
                năm, công ty đưa hàng trăm lượt nhân viên sang làm việc tại các
                nước Nhật Bản, Mỹ, Singapore… Trong 3 năm gần đây, FPT Software
                Đà Nẵng là công ty có tốc độ tăng trưởng trung bình hơn 70%/năm.
                Đây là tốc độ tăng trưởng cao nhất Tập đoàn, sự tăng trưởng làm
                nên cơ hội lớn cho mọi cá nhân đang tham gia vào sự phát triển
                này.
              </p>
              <p>
                Để đáp ứng nhu cầu tăng trưởng nguồn lực trong 12 năm qua, công
                ty đã xây dựng quan hệ với gần 30 trường Đại học, Cao đẳng có
                đào tạo về CNTT tại khu vực miền Trung (Vinh, Huế, Quảng Nam,
                Quảng Ngãi, Quy Nhơn…). Ngoài việc ký kết hợp tác với các
                trường, FPT Software Đà Nẵng đã chuyển giao chương trình đào tạo
                do chính các chuyên gia công nghệ của công ty xây dựng tới các
                trường. Các trường đại học đã cam kết đào tạo sinh viên theo
                đúng chương trình đào tạo này để đảm bảo ngay khi tốt nghiệp,
                sinh viên có thể đáp ứng yêu cầu chất lượng, được nhận thẳng vào
                FPT Software Đà Nẵng làm việc mà không cần quá trình đào tạo
                lại.
              </p>
              <p>
                Hiện tại, FPT Software Đà Nẵng đang có 2 trụ sở làm việc là Tòa
                nhà FPT An Đồn, P.An Hải Bắc, Q.Sơn Trà và Tòa nhà FPT Complex,
                đường Nam Kỳ Khởi Nghĩa, P.Hòa Hải, Q.Ngũ Hành Sơn. Nhân viên
                FPT Software Đà Nẵng tự hào khi làm việc trong khuôn viên xanh,
                tiện nghi với cảnh quan đẹp mắt, đáp ứng nhu cầu sinh hoạt, thể
                thao và giải trí… Không có gì ngạc nhiên khi đời sống tinh thần
                ở đây vô cùng phong phú, với các giải đá bóng nội bộ ngay trên
                sân nhà. Và đặc biệt, những con người mới khi làm việc tại Đà
                Nẵng sẽ bắt gặp một tinh thần Máu và thuần chất FPT “bản nguyên”
                với những con người, tinh thần STCo gạo cội gắn bó với FPT và Đà
                Nẵng lâu năm.
              </p>
              <p>
                FPT Software có mặt tại Đà Nẵng từ năm 2005 và là công ty công
                nghệ lớn nhất khu vực với hơn 3.000 nhân sự. F – Complex –
                Campus của FPT Software tại Đà Nẵng được xem là địa điểm làm
                việc hiện đại của miền Trung. Tòa nhà nằm bên dòng sông Cổ Cò,
                giữa cung đường du lịch Đà Nẵng – Hội An.
              </p> */}
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
