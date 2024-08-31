function Pagination() {
  let pages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <div className="pagination">
        <span id="prev">Prev</span>
        <ul className="flex wrap">
          {pages.map((page) => (
            <li>{page}</li>
          ))}
        </ul>
        <span id="next">Next</span>
      </div>
    </>
  );
}

export default Pagination;
