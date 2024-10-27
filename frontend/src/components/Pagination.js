// Pagination.js
import React, { useState, useEffect } from 'react';

const Pagination = ({ allData, onDataUpdate }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allData.length / itemsPerPage);

  // Effect to update currentData based on current page
  useEffect(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentData = allData.slice(startIdx, endIdx);
    onDataUpdate(currentData); // Pass only the current page's data
}, [currentPage, allData, onDataUpdate]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
