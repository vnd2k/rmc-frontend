import classes from "./Pagination.module.css";
function Pagination(props) {
  const DOTS = "...";
  const totalPages = props.totalPages;
  const currentPage = props.currentPage;
  const generatePageRange = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  let range = generatePageRange(1, totalPages);

  return (
    <div className={classes.pagination}>
      <ul className={classes.list}>
        {range.map((item, index) => (
          <li key={index}>
            {typeof item === "number" ? (
              <button
                onClick={() => props.pageChange(index + 1)}
                className={currentPage === item ? classes.active : classes.item}
              >
                {item}
              </button>
            ) : (
              <span>{DOTS}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
