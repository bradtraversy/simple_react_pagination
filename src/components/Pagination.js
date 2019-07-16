import React from 'react';

const Pagination = ({ currentPage, lastPage, paginate, toPreviousPage, toNextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li className={'page-item ' + (currentPage===1 ? 'disabled' : '')}>
          <a onClick={toPreviousPage} href='!#' className='page-link' >Previous</a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={'page-item ' + (number===currentPage ? 'active' : '')}>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li className={'page-item ' + (currentPage===lastPage ? 'disabled' : '')}>
            <a onClick={toNextPage} href='!#' className='page-link'>Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
