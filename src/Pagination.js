import React from 'react';

const Pagination = ({ totalCount, offset, limit, setOffset, setLimit }) => {
  
  const handleLimitChange = (e) => {
    const newLimit = Math.min(Math.max(parseInt(e.target.value, 10), 1), 10);
    setLimit(newLimit);
  };

  const handlePageChange = (newOffset) => {
    setOffset(newOffset);
  };

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="pagination-container">
      {totalCount > 0 && (
        <>
          <div className="pagination-controls">
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => handlePageChange(pageIndex * limit)}
                className={offset / limit === pageIndex ? 'active' : ''}
              >
                {pageIndex + 1}
              </button>
            ))}
          </div>
          <div className="limit-control">
            <input
              type="number"
              min="1"
              max="10"
              value={limit}
              onChange={handleLimitChange}
              aria-label="Number of results per page"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
