import React, { FC } from "react";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumebr: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}): JSX.Element => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number: number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
