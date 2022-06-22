import classes from "./SearchCompany.module.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { searchCompany } from "../../stores/company/companySlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GrTechnology } from "react-icons/gr";
function SearchCompany() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { companySearch } = useSelector((state) => state.company);

  const handleSearchCompany = (e) => {
    const character = e.target.value;
    setInput(character);
    if (character) {
      dispatch(searchCompany(character));
    }
  };

  const companyLink = (id) => {
    return `/company/${id}`;
  };

  return (
    <div className={classes.searchWrapper}>
      <div className={classes.backgroundSearch}>
        <HiOutlineOfficeBuilding
          className={classes.backgroundIcon}
        ></HiOutlineOfficeBuilding>
        <input
          type="text"
          placeholder="Your company"
          className={classes.searchBox}
          onChange={handleSearchCompany}
        ></input>
      </div>
      <div className={classes.searchResult}>
        {companySearch &&
          (companySearch.length > 0 && input !== "" ? (
            <>
              <div>
                <ul className={classes.searchUl}>
                  {companySearch?.map((item) => (
                    <Link
                      to={companyLink(item.id)}
                      className={classes.itemLink}
                    >
                      <li className={classes.itemSearch} key={item.id}>
                        <GrTechnology
                          className={classes.resultIcon}
                        ></GrTechnology>
                        <span>{item.name}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p></p>
          ))}
      </div>
    </div>
  );
}

export default SearchCompany;
