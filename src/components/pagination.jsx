import React from "react";

const pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="page">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {/* eslint-disable-next-line */}
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
// eslint-disable-next-line

export default pagination;
