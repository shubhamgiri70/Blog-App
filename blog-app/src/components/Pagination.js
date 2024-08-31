import React from "react";

function Pagination(props) {
  let {
    articlesCount,
    articlesPerPage,
    activePageIndex,
    updateCurrentPageIndex,
  } = props;

  let numberOfPages = Math.ceil(articlesCount / articlesPerPage);
  let pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="pagination">
        <span
          onClick={() =>
            updateCurrentPageIndex(
              activePageIndex - 1 < 1 ? 1 : activePageIndex - 1
            )
          }
          id="prev"
        >
          Prev
        </span>
        <ul className="flex wrap">
          {pages.map((page) => (
            <li
              key={page}
              onClick={() => {
                updateCurrentPageIndex(page);
              }}
              className={`${activePageIndex === page ? "active-page" : ""}`}
            >
              {page}
            </li>
          ))}
        </ul>
        <span
          onClick={() =>
            updateCurrentPageIndex(
              activePageIndex + 1 > numberOfPages
                ? numberOfPages
                : activePageIndex + 1
            )
          }
          id="next"
        >
          Next
        </span>
      </div>
    </>
  );
}

export default Pagination;
