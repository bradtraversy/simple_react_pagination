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
          <button onClick={toPreviousPage} className='page-link' >Previous</button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={'page-item ' + (number===currentPage ? 'active' : '')}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
        <li className={'page-item ' + (currentPage===lastPage ? 'disabled' : '')}>
            <button onClick={toNextPage} className='page-link'>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
